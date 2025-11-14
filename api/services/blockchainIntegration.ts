/**
 * SYMBI Blockchain Integration Service
 * Implements real blockchain anchoring for DID verification and trust data
 * Integrates with Ethereum, Polygon, and other EVM-compatible chains
 */

import { ethers } from 'ethers';
import { logger } from './logger.js';
import { BlockchainAnchor, TrustAnchor, DIDDocument } from '../shared/types.js';

/**
 * Blockchain Integration Service
 * Provides blockchain anchoring, verification, and smart contract interactions
 */
export class BlockchainIntegration {
  private providers: Map<string, ethers.Provider> = new Map();
  private wallets: Map<string, ethers.Wallet> = new Map();
  private contracts: Map<string, ethers.Contract> = new Map();
  private readonly supportedNetworks = ['ethereum', 'polygon', 'arbitrum', 'optimism'];
  
  // Contract ABIs
  private readonly TRUST_ANCHOR_ABI = [
    "function anchorTrustData(string memory did, bytes32 dataHash, uint256 timestamp) external payable",
    "function verifyTrustData(string memory did, bytes32 dataHash) external view returns (bool, uint256)",
    "function getTrustAnchor(string memory did) external view returns (bytes32, uint256, address)",
    "function revokeTrustAnchor(string memory did) external",
    "event TrustDataAnchored(string indexed did, bytes32 indexed dataHash, address indexed anchorer)"
  ];

  private readonly DID_REGISTRY_ABI = [
    "function registerDID(string memory did, bytes32 documentHash) external payable",
    "function updateDID(string memory did, bytes32 documentHash) external payable",
    "function resolveDID(string memory did) external view returns (bytes32, uint256, address)",
    "function deactivateDID(string memory did) external",
    "event DIDRegistered(string indexed did, bytes32 indexed documentHash, address indexed owner)"
  ];

  constructor() {
    this.initializeProviders();
  }

  /**
   * Initialize blockchain providers and connections
   */
  private initializeProviders(): void {
    // Ethereum mainnet
    if (process.env.ETHEREUM_RPC_URL) {
      const ethProvider = new ethers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);
      this.providers.set('ethereum', ethProvider);
      
      if (process.env.ETHEREUM_PRIVATE_KEY) {
        const ethWallet = new ethers.Wallet(process.env.ETHEREUM_PRIVATE_KEY, ethProvider);
        this.wallets.set('ethereum', ethWallet);
      }
    }

    // Polygon mainnet
    if (process.env.POLYGON_RPC_URL) {
      const polygonProvider = new ethers.JsonRpcProvider(process.env.POLYGON_RPC_URL);
      this.providers.set('polygon', polygonProvider);
      
      if (process.env.POLYGON_PRIVATE_KEY) {
        const polygonWallet = new ethers.Wallet(process.env.POLYGON_PRIVATE_KEY, polygonProvider);
        this.wallets.set('polygon', polygonWallet);
      }
    }

    // Arbitrum
    if (process.env.ARBITRUM_RPC_URL) {
      const arbitrumProvider = new ethers.JsonRpcProvider(process.env.ARBITRUM_RPC_URL);
      this.providers.set('arbitrum', arbitrumProvider);
      
      if (process.env.ARBITRUM_PRIVATE_KEY) {
        const arbitrumWallet = new ethers.Wallet(process.env.ARBITRUM_PRIVATE_KEY, arbitrumProvider);
        this.wallets.set('arbitrum', arbitrumWallet);
      }
    }

    // Optimism
    if (process.env.OPTIMISM_RPC_URL) {
      const optimismProvider = new ethers.JsonRpcProvider(process.env.OPTIMISM_RPC_URL);
      this.providers.set('optimism', optimismProvider);
      
      if (process.env.OPTIMISM_PRIVATE_KEY) {
        const optimismWallet = new ethers.Wallet(process.env.OPTIMISM_PRIVATE_KEY, optimismProvider);
        this.wallets.set('optimism', optimismWallet);
      }
    }

    logger.info('Blockchain providers initialized', {
      networks: Array.from(this.providers.keys()),
      wallets: Array.from(this.wallets.keys())
    });
  }

  /**
   * Initialize smart contracts for each network
   */
  private async initializeContracts(network: string): Promise<void> {
    const provider = this.providers.get(network);
    const wallet = this.wallets.get(network);
    
    if (!provider || !wallet) {
      throw new Error(`Provider or wallet not available for ${network}`);
    }

    // Trust Anchor Contract
    const trustAnchorAddress = this.getContractAddress(network, 'TRUST_ANCHOR');
    if (trustAnchorAddress) {
      const trustAnchorContract = new ethers.Contract(
        trustAnchorAddress,
        this.TRUST_ANCHOR_ABI,
        wallet
      );
      this.contracts.set(`${network}:trust_anchor`, trustAnchorContract);
    }

    // DID Registry Contract
    const didRegistryAddress = this.getContractAddress(network, 'DID_REGISTRY');
    if (didRegistryAddress) {
      const didRegistryContract = new ethers.Contract(
        didRegistryAddress,
        this.DID_REGISTRY_ABI,
        wallet
      );
      this.contracts.set(`${network}:did_registry`, didRegistryContract);
    }
  }

  /**
   * Get contract address for a network and contract type
   */
  private getContractAddress(network: string, contractType: string): string | null {
    const envKey = `${network.toUpperCase()}_${contractType}_ADDRESS`;
    return process.env[envKey] || null;
  }

  /**
   * Anchor trust data to blockchain
   */
  async anchorTrustData(
    did: string,
    trustData: any,
    network: string = 'polygon'
  ): Promise<BlockchainAnchor> {
    try {
      const contract = this.contracts.get(`${network}:trust_anchor`);
      if (!contract) {
        throw new Error(`Trust anchor contract not available for ${network}`);
      }

      // Hash the trust data
      const dataHash = this.hashTrustData(trustData);
      const timestamp = Math.floor(Date.now() / 1000);

      logger.info('Anchoring trust data to blockchain', {
        did,
        network,
        dataHash,
        timestamp
      });

      // Send transaction
      const tx = await contract.anchorTrustData(did, dataHash, timestamp);
      const receipt = await tx.wait();

      const anchor: BlockchainAnchor = {
        id: `anchor-${did}-${timestamp}`,
        did,
        network,
        transactionHash: tx.hash,
        blockNumber: receipt.blockNumber,
        blockHash: receipt.blockHash,
        timestamp: new Date(timestamp * 1000),
        dataHash,
        anchorType: 'trust_data',
        confirmations: 1,
        status: 'confirmed'
      };

      logger.info('Trust data anchored successfully', {
        did,
        network,
        transactionHash: tx.hash,
        blockNumber: receipt.blockNumber
      });

      return anchor;

    } catch (error) {
      logger.error('Failed to anchor trust data', {
        did,
        network,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Verify trust data on blockchain
   */
  async verifyTrustData(
    did: string,
    trustData: any,
    network: string = 'polygon'
  ): Promise<{ isValid: boolean; timestamp: number; anchorer: string }> {
    try {
      const contract = this.contracts.get(`${network}:trust_anchor`);
      if (!contract) {
        throw new Error(`Trust anchor contract not available for ${network}`);
      }

      const dataHash = this.hashTrustData(trustData);

      logger.info('Verifying trust data on blockchain', {
        did,
        network,
        dataHash
      });

      // Call contract to verify
      const result = await contract.verifyTrustData(did, dataHash);
      const [isValid, timestamp, anchorer] = result;

      logger.info('Trust data verification completed', {
        did,
        network,
        isValid,
        timestamp: timestamp.toString(),
        anchorer
      });

      return {
        isValid,
        timestamp: timestamp.toNumber(),
        anchorer
      };

    } catch (error) {
      logger.error('Failed to verify trust data', {
        did,
        network,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Register DID document on blockchain
   */
  async registerDID(
    did: string,
    document: DIDDocument,
    network: string = 'polygon'
  ): Promise<BlockchainAnchor> {
    try {
      const contract = this.contracts.get(`${network}:did_registry`);
      if (!contract) {
        throw new Error(`DID registry contract not available for ${network}`);
      }

      // Hash the DID document
      const documentHash = this.hashDIDDocument(document);

      logger.info('Registering DID on blockchain', {
        did,
        network,
        documentHash
      });

      // Send transaction
      const tx = await contract.registerDID(did, documentHash);
      const receipt = await tx.wait();

      const anchor: BlockchainAnchor = {
        id: `did-anchor-${did}-${Date.now()}`,
        did,
        network,
        transactionHash: tx.hash,
        blockNumber: receipt.blockNumber,
        blockHash: receipt.blockHash,
        timestamp: new Date(),
        dataHash: documentHash,
        anchorType: 'did_registration',
        confirmations: 1,
        status: 'confirmed'
      };

      logger.info('DID registered successfully', {
        did,
        network,
        transactionHash: tx.hash,
        blockNumber: receipt.blockNumber
      });

      return anchor;

    } catch (error) {
      logger.error('Failed to register DID', {
        did,
        network,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Update DID document on blockchain
   */
  async updateDID(
    did: string,
    document: DIDDocument,
    network: string = 'polygon'
  ): Promise<BlockchainAnchor> {
    try {
      const contract = this.contracts.get(`${network}:did_registry`);
      if (!contract) {
        throw new Error(`DID registry contract not available for ${network}`);
      }

      const documentHash = this.hashDIDDocument(document);

      logger.info('Updating DID on blockchain', {
        did,
        network,
        documentHash
      });

      const tx = await contract.updateDID(did, documentHash);
      const receipt = await tx.wait();

      const anchor: BlockchainAnchor = {
        id: `did-update-${did}-${Date.now()}`,
        did,
        network,
        transactionHash: tx.hash,
        blockNumber: receipt.blockNumber,
        blockHash: receipt.blockHash,
        timestamp: new Date(),
        dataHash: documentHash,
        anchorType: 'did_update',
        confirmations: 1,
        status: 'confirmed'
      };

      logger.info('DID updated successfully', {
        did,
        network,
        transactionHash: tx.hash
      });

      return anchor;

    } catch (error) {
      logger.error('Failed to update DID', {
        did,
        network,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Resolve DID from blockchain
   */
  async resolveDID(
    did: string,
    network: string = 'polygon'
  ): Promise<{ documentHash: string; timestamp: number; owner: string } | null> {
    try {
      const contract = this.contracts.get(`${network}:did_registry`);
      if (!contract) {
        throw new Error(`DID registry contract not available for ${network}`);
      }

      logger.info('Resolving DID from blockchain', {
        did,
        network
      });

      const result = await contract.resolveDID(did);
      const [documentHash, timestamp, owner] = result;

      if (documentHash === ethers.ZeroHash) {
        return null; // DID not found
      }

      logger.info('DID resolved successfully', {
        did,
        network,
        documentHash,
        timestamp: timestamp.toString(),
        owner
      });

      return {
        documentHash,
        timestamp: timestamp.toNumber(),
        owner
      };

    } catch (error) {
      logger.error('Failed to resolve DID', {
        did,
        network,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Get transaction status
   */
  async getTransactionStatus(
    transactionHash: string,
    network: string = 'polygon'
  ): Promise<{ status: string; confirmations: number; blockNumber?: number }> {
    try {
      const provider = this.providers.get(network);
      if (!provider) {
        throw new Error(`Provider not available for ${network}`);
      }

      const receipt = await provider.getTransactionReceipt(transactionHash);
      
      if (!receipt) {
        return {
          status: 'pending',
          confirmations: 0
        };
      }

      const currentBlock = await provider.getBlockNumber();
      const confirmations = currentBlock - receipt.blockNumber;

      return {
        status: receipt.status === 1 ? 'confirmed' : 'failed',
        confirmations,
        blockNumber: receipt.blockNumber
      };

    } catch (error) {
      logger.error('Failed to get transaction status', {
        transactionHash,
        network,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Get network information
   */
  async getNetworkInfo(network: string): Promise<{
    chainId: number;
    networkName: string;
    blockNumber: number;
    gasPrice: bigint;
  }> {
    try {
      const provider = this.providers.get(network);
      if (!provider) {
        throw new Error(`Provider not available for ${network}`);
      }

      const [chainId, blockNumber, gasPrice] = await Promise.all([
        provider.getNetwork().then(n => n.chainId),
        provider.getBlockNumber(),
        provider.getFeeData().then(f => f.gasPrice || 0n)
      ]);

      return {
        chainId,
        networkName: network,
        blockNumber,
        gasPrice
      };

    } catch (error) {
      logger.error('Failed to get network info', {
        network,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Hash trust data for blockchain anchoring
   */
  private hashTrustData(trustData: any): string {
    const dataString = JSON.stringify(trustData, Object.keys(trustData).sort());
    return ethers.keccak256(ethers.toUtf8Bytes(dataString));
  }

  /**
   * Hash DID document for blockchain anchoring
   */
  private hashDIDDocument(document: DIDDocument): string {
    const documentString = JSON.stringify(document, null, 2);
    return ethers.keccak256(ethers.toUtf8Bytes(documentString));
  }

  /**
   * Get supported networks
   */
  getSupportedNetworks(): string[] {
    return Array.from(this.providers.keys());
  }

  /**
   * Check if network is available
   */
  isNetworkAvailable(network: string): boolean {
    return this.providers.has(network);
  }

  /**
   * Estimate gas for a transaction
   */
  async estimateGas(
    network: string,
    contractType: 'trust_anchor' | 'did_registry',
    method: string,
    params: any[]
  ): Promise<bigint> {
    try {
      const contract = this.contracts.get(`${network}:${contractType}`);
      if (!contract) {
        throw new Error(`${contractType} contract not available for ${network}`);
      }

      const gasEstimate = await contract[method].estimateGas(...params);
      return gasEstimate;

    } catch (error) {
      logger.error('Failed to estimate gas', {
        network,
        contractType,
        method,
        params,
        error: error.message
      });
      throw error;
    }
  }
}

// Export singleton instance
export const blockchainIntegration = new BlockchainIntegration();