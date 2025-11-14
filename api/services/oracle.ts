/**
 * SYMBI Oracle System
 * Implements decentralized oracle network with consensus mechanism
 * Provides external data validation and verification for trust scoring
 */

import crypto from 'crypto';
import { OracleNode, OracleData, OracleConsensus } from '../shared/types';
import { logger } from './logger';

/**
 * Oracle Network Implementation
 * Manages a decentralized network of oracle nodes that provide external data validation
 */
export class OracleSystem {
  private nodes: Map<string, OracleNode> = new Map();
  private consensusResults: Map<string, OracleConsensus> = new Map();
  private readonly consensusThreshold = 0.67; // 67% consensus required
  private readonly maxOracleNodes = 21;
  private readonly heartbeatTimeout = 300000; // 5 minutes
  private readonly rewardPool = 1000000; // Initial reward pool in SYMBI tokens

  constructor() {
    // Initialize with some default oracle nodes
    this.initializeDefaultNodes();
    
    // Start heartbeat monitoring
    this.startHeartbeatMonitoring();
  }

  /**
   * Register a new oracle node in the network
   */
  async registerNode(node: OracleNode): Promise<boolean> {
    try {
      // Validate node credentials
      if (!this.validateNodeCredentials(node)) {
        throw new Error('Invalid node credentials');
      }

      // Check network capacity
      if (this.nodes.size >= this.maxOracleNodes) {
        throw new Error('Oracle network at maximum capacity');
      }

      // Verify stake (minimum 1000 SYMBI tokens required)
      if (node.stake < 1000) {
        throw new Error('Insufficient stake amount');
      }

      // Check for duplicate registration
      if (this.nodes.has(node.id)) {
        throw new Error('Node already registered');
      }

      // Register the node
      node.status = 'active';
      node.lastHeartbeat = new Date();
      node.submittedData = [];
      
      this.nodes.set(node.id, node);
      
      logger.info('Oracle node registered', {
        nodeId: node.id,
        did: node.did,
        stake: node.stake
      });

      return true;
    } catch (error) {
      logger.error('Failed to register oracle node', { error, nodeId: node.id });
      return false;
    }
  }

  /**
   * Submit data from an oracle node
   */
  async submitData(data: OracleData): Promise<boolean> {
    try {
      // Verify oracle node is registered and active
      const node = this.nodes.get(data.oracleId);
      if (!node || node.status !== 'active') {
        throw new Error('Oracle node not registered or inactive');
      }

      // Verify data signature
      if (!this.verifyDataSignature(data)) {
        throw new Error('Invalid data signature');
      }

      // Validate data format and content
      if (!this.validateOracleData(data)) {
        throw new Error('Invalid data format');
      }

      // Add to node's submitted data
      node.submittedData.push(data);
      
      logger.info('Oracle data submitted', {
        oracleId: data.oracleId,
        dataType: data.dataType,
        timestamp: data.timestamp
      });

      // Check if we have enough submissions for consensus
      await this.checkConsensus(data.dataType, data.data.targetDID);

      return true;
    } catch (error) {
      logger.error('Failed to submit oracle data', { error, dataId: data.id });
      return false;
    }
  }

  /**
   * Check for consensus on a specific data type and target
   */
  private async checkConsensus(dataType: string, targetDID: string): Promise<void> {
    try {
      // Collect all relevant submissions
      const submissions: OracleData[] = [];
      
      for (const node of this.nodes.values()) {
        if (node.status === 'active') {
          const relevantData = node.submittedData.filter(
            data => data.dataType === dataType && 
                   data.data.targetDID === targetDID &&
                   Date.now() - data.timestamp.getTime() < 300000 // Within 5 minutes
          );
          submissions.push(...relevantData);
        }
      }

      // Check if we have enough submissions for consensus
      const activeNodes = Array.from(this.nodes.values()).filter(n => n.status === 'active').length;
      const requiredSubmissions = Math.ceil(activeNodes * this.consensusThreshold);

      if (submissions.length >= requiredSubmissions) {
        // Calculate consensus result
        const consensusResult = await this.calculateConsensusResult(submissions, dataType);
        
        // Create consensus record
        const consensus: OracleConsensus = {
          id: this.generateConsensusId(dataType, targetDID),
          dataType,
          targetDID,
          submissions,
          consensusResult,
          consensusAlgorithm: this.getConsensusAlgorithm(dataType),
          threshold: this.consensusThreshold,
          finalizedAt: new Date(),
          rewardDistributed: false
        };

        this.consensusResults.set(consensus.id, consensus);
        
        // Distribute rewards
        await this.distributeRewards(consensus);

        logger.info('Consensus achieved', {
          consensusId: consensus.id,
          dataType,
          targetDID,
          submissions: submissions.length,
          result: consensusResult
        });
      }
    } catch (error) {
      logger.error('Error checking consensus', { error, dataType, targetDID });
    }
  }

  /**
   * Calculate consensus result from submissions
   */
  private async calculateConsensusResult(submissions: OracleData[], dataType: string): Promise<any> {
    const algorithm = this.getConsensusAlgorithm(dataType);
    
    switch (algorithm) {
      case 'majority':
        return this.calculateMajorityConsensus(submissions);
      case 'weighted_average':
        return this.calculateWeightedAverageConsensus(submissions);
      case 'median':
        return this.calculateMedianConsensus(submissions);
      default:
        throw new Error(`Unknown consensus algorithm: ${algorithm}`);
    }
  }

  /**
   * Calculate majority consensus
   */
  private calculateMajorityConsensus(submissions: OracleData[]): any {
    const voteCount = new Map<string, number>();
    
    for (const submission of submissions) {
      const vote = JSON.stringify(submission.data.value);
      voteCount.set(vote, (voteCount.get(vote) || 0) + 1);
    }

    let majorityVote = '';
    let maxVotes = 0;
    
    for (const [vote, count] of voteCount.entries()) {
      if (count > maxVotes) {
        majorityVote = vote;
        maxVotes = count;
      }
    }

    return {
      value: JSON.parse(majorityVote),
      confidence: maxVotes / submissions.length,
      algorithm: 'majority'
    };
  }

  /**
   * Calculate weighted average consensus (weighted by node reputation)
   */
  private calculateWeightedAverageConsensus(submissions: OracleData[]): any {
    let weightedSum = 0;
    let totalWeight = 0;
    
    for (const submission of submissions) {
      const node = this.nodes.get(submission.oracleId);
      if (node) {
        const weight = node.reputation;
        weightedSum += submission.data.value * weight;
        totalWeight += weight;
      }
    }

    const average = totalWeight > 0 ? weightedSum / totalWeight : 0;
    
    return {
      value: average,
      confidence: Math.min(1, totalWeight / submissions.length),
      algorithm: 'weighted_average'
    };
  }

  /**
   * Calculate median consensus
   */
  private calculateMedianConsensus(submissions: OracleData[]): any {
    const values = submissions.map(s => s.data.value).sort((a, b) => a - b);
    const median = values[Math.floor(values.length / 2)];
    
    return {
      value: median,
      confidence: 0.8, // Fixed confidence for median
      algorithm: 'median'
    };
  }

  /**
   * Get the appropriate consensus algorithm for a data type
   */
  private getConsensusAlgorithm(dataType: string): string {
    switch (dataType) {
      case 'trust_score':
        return 'weighted_average';
      case 'credential_status':
        return 'majority';
      case 'compliance_status':
        return 'majority';
      case 'reputation':
        return 'median';
      default:
        return 'weighted_average';
    }
  }

  /**
   * Distribute rewards to participating oracle nodes
   */
  private async distributeRewards(consensus: OracleConsensus): Promise<void> {
    try {
      const totalReward = 100; // SYMBI tokens per consensus
      const participatingNodes = new Set(consensus.submissions.map(s => s.oracleId));
      
      let rewardDistributed = 0;
      
      for (const nodeId of participatingNodes) {
        const node = this.nodes.get(nodeId);
        if (node && node.status === 'active') {
          // Calculate reward based on reputation and accuracy
          const nodeSubmissions = consensus.submissions.filter(s => s.oracleId === nodeId);
          const accuracy = this.calculateNodeAccuracy(nodeSubmissions, consensus.consensusResult);
          const reward = (totalReward / participatingNodes.size) * accuracy * (node.reputation / 100);
          
          // Update node stake (simulated)
          node.stake += reward;
          rewardDistributed += reward;
          
          logger.info('Reward distributed to oracle node', {
            nodeId,
            reward,
            accuracy,
            newStake: node.stake
          });
        }
      }

      consensus.rewardDistributed = true;
      
      logger.info('Rewards distributed for consensus', {
        consensusId: consensus.id,
        totalReward: rewardDistributed,
        participatingNodes: participatingNodes.size
      });
    } catch (error) {
      logger.error('Error distributing rewards', { error, consensusId: consensus.id });
    }
  }

  /**
   * Calculate node accuracy based on submissions vs consensus result
   */
  private calculateNodeAccuracy(submissions: OracleData[], consensusResult: any): number {
    if (submissions.length === 0) return 0;
    
    let accurateSubmissions = 0;
    
    for (const submission of submissions) {
      // Simple accuracy check - in production, this would be more sophisticated
      if (Math.abs(submission.data.value - consensusResult.value) < 0.1) {
        accurateSubmissions++;
      }
    }
    
    return accurateSubmissions / submissions.length;
  }

  /**
   * Validate oracle node credentials
   */
  private validateNodeCredentials(node: OracleNode): boolean {
    // Basic validation - in production, this would include cryptographic verification
    return !!(node.id && node.did && node.endpoint && node.publicKey && node.stake > 0);
  }

  /**
   * Validate oracle data format and content
   */
  private validateOracleData(data: OracleData): boolean {
    // Basic validation
    return !!(data.id && data.oracleId && data.dataType && data.data && data.signature && data.timestamp);
  }

  /**
   * Verify data signature
   */
  private verifyDataSignature(data: OracleData): boolean {
    // In production, this would verify the cryptographic signature
    // For now, simulate verification
    return data.signature.length > 10; // Basic length check
  }

  /**
   * Initialize default oracle nodes for testing
   */
  private initializeDefaultNodes(): void {
    const defaultNodes: OracleNode[] = [
      {
        id: 'oracle-1',
        did: 'did:symbi:oracle-1',
        endpoint: 'https://oracle1.symbi.world',
        publicKey: '0x1234567890abcdef',
        reputation: 85,
        stake: 5000,
        status: 'active',
        lastHeartbeat: new Date(),
        submittedData: []
      },
      {
        id: 'oracle-2',
        did: 'did:symbi:oracle-2',
        endpoint: 'https://oracle2.symbi.world',
        publicKey: '0xabcdef1234567890',
        reputation: 92,
        stake: 7500,
        status: 'active',
        lastHeartbeat: new Date(),
        submittedData: []
      },
      {
        id: 'oracle-3',
        did: 'did:symbi:oracle-3',
        endpoint: 'https://oracle3.symbi.world',
        publicKey: '0xfedcba0987654321',
        reputation: 78,
        stake: 3000,
        status: 'active',
        lastHeartbeat: new Date(),
        submittedData: []
      }
    ];

    for (const node of defaultNodes) {
      this.nodes.set(node.id, node);
    }
  }

  /**
   * Start heartbeat monitoring for oracle nodes
   */
  private startHeartbeatMonitoring(): void {
    setInterval(() => {
      this.checkNodeHeartbeats();
    }, 60000); // Check every minute
  }

  /**
   * Check and update node heartbeats
   */
  private checkNodeHeartbeats(): void {
    const now = Date.now();
    
    for (const node of this.nodes.values()) {
      if (node.status === 'active' && 
          now - node.lastHeartbeat.getTime() > this.heartbeatTimeout) {
        node.status = 'inactive';
        
        logger.warn('Oracle node marked inactive due to heartbeat timeout', {
          nodeId: node.id,
          lastHeartbeat: node.lastHeartbeat
        });
      }
    }
  }

  /**
   * Generate unique consensus ID
   */
  private generateConsensusId(dataType: string, targetDID: string): string {
    const input = `${dataType}:${targetDID}:${Date.now()}`;
    return crypto.createHash('sha256').update(input).digest('hex').substring(0, 32);
  }

  /**
   * Get oracle network statistics
   */
  getNetworkStatistics(): {
    totalNodes: number;
    activeNodes: number;
    totalStake: number;
    consensusCount: number;
    averageReputation: number;
  } {
    const nodes = Array.from(this.nodes.values());
    const activeNodes = nodes.filter(n => n.status === 'active');
    
    return {
      totalNodes: nodes.length,
      activeNodes: activeNodes.length,
      totalStake: nodes.reduce((sum, node) => sum + node.stake, 0),
      consensusCount: this.consensusResults.size,
      averageReputation: activeNodes.length > 0 
        ? activeNodes.reduce((sum, node) => sum + node.reputation, 0) / activeNodes.length 
        : 0
    };
  }

  /**
   * Get consensus result for a specific data type and target
   */
  getConsensusResult(dataType: string, targetDID: string): OracleConsensus | null {
    for (const consensus of this.consensusResults.values()) {
      if (consensus.dataType === dataType && consensus.targetDID === targetDID) {
        return consensus;
      }
    }
    return null;
  }

  /**
   * Submit heartbeat from an oracle node
   */
  async submitHeartbeat(nodeId: string): Promise<boolean> {
    const node = this.nodes.get(nodeId);
    if (!node) {
      return false;
    }

    node.lastHeartbeat = new Date();
    if (node.status === 'inactive') {
      node.status = 'active';
    }

    return true;
  }
}

// Export singleton instance
export const oracleSystem = new OracleSystem();