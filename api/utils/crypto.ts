import { ed25519 } from '@noble/ed25519';
import { createHash, randomBytes } from 'crypto';
import { SYMBIError, ErrorCodes } from '../shared/types.js';
import { CRYPTO } from '../shared/constants.js';

/**
 * Cryptographic utilities for SYMBI trust infrastructure
 */
export class CryptoUtils {
  /**
   * Generate a new Ed25519 keypair
   */
  static async generateKeypair(): Promise<{ publicKey: Uint8Array; privateKey: Uint8Array }> {
    try {
      const privateKey = ed25519.utils.randomPrivateKey();
      const publicKey = await ed25519.getPublicKey(privateKey);
      return { publicKey, privateKey };
    } catch (error) {
      throw new SYMBIError(
        'Failed to generate cryptographic keypair',
        ErrorCodes.KMS_OPERATION_FAILED,
        500,
        { originalError: error }
      );
    }
  }

  /**
   * Sign data with Ed25519 private key
   */
  static async sign(data: string | Uint8Array, privateKey: Uint8Array): Promise<Uint8Array> {
    try {
      const dataBytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
      return await ed25519.sign(dataBytes, privateKey);
    } catch (error) {
      throw new SYMBIError(
        'Failed to sign data',
        ErrorCodes.KMS_OPERATION_FAILED,
        500,
        { originalError: error }
      );
    }
  }

  /**
   * Verify Ed25519 signature
   */
  static async verify(
    signature: Uint8Array,
    data: string | Uint8Array,
    publicKey: Uint8Array
  ): Promise<boolean> {
    try {
      const dataBytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
      return await ed25519.verify(signature, dataBytes, publicKey);
    } catch (error) {
      throw new SYMBIError(
        'Failed to verify signature',
        ErrorCodes.KMS_OPERATION_FAILED,
        500,
        { originalError: error }
      );
    }
  }

  /**
   * Generate SHA-256 hash of data
   */
  static hash(data: string | Uint8Array): string {
    try {
      const dataBytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
      return createHash('sha256').update(dataBytes).digest('hex');
    } catch (error) {
      throw new SYMBIError(
        'Failed to generate hash',
        ErrorCodes.KMS_OPERATION_FAILED,
        500,
        { originalError: error }
      );
    }
  }

  /**
   * Generate cryptographically secure random bytes
   */
  static randomBytes(length: number): Uint8Array {
    try {
      return randomBytes(length);
    } catch (error) {
      throw new SYMBIError(
        'Failed to generate random bytes',
        ErrorCodes.KMS_OPERATION_FAILED,
        500,
        { originalError: error }
      );
    }
  }

  /**
   * Convert Uint8Array to base64 string
   */
  static toBase64(bytes: Uint8Array): string {
    return Buffer.from(bytes).toString('base64');
  }

  /**
   * Convert base64 string to Uint8Array
   */
  static fromBase64(base64: string): Uint8Array {
    return new Uint8Array(Buffer.from(base64, 'base64'));
  }

  /**
   * Convert Uint8Array to hex string
   */
  static toHex(bytes: Uint8Array): string {
    return Buffer.from(bytes).toString('hex');
  }

  /**
   * Convert hex string to Uint8Array
   */
  static fromHex(hex: string): Uint8Array {
    return new Uint8Array(Buffer.from(hex, 'hex'));
  }

  /**
   * Create a deterministic hash chain for audit trails
   */
  static createHashChain(previousHash: string, data: any): string {
    const dataString = JSON.stringify(data, Object.keys(data).sort());
    const combined = `${previousHash}:${dataString}`;
    return this.hash(combined);
  }

  /**
   * Verify hash chain integrity
   */
  static verifyHashChain(previousHash: string, data: any, expectedHash: string): boolean {
    const calculatedHash = this.createHashChain(previousHash, data);
    return calculatedHash === expectedHash;
  }

  /**
   * Generate a unique identifier
   */
  static generateId(): string {
    return this.toHex(this.randomBytes(16));
  }

  /**
   * Create a digital signature for audit entries
   */
  static async createAuditSignature(
    transactionId: string,
    action: string,
    actor: string,
    target: string,
    metadata: Record<string, any>,
    privateKey: Uint8Array
  ): Promise<string> {
    const payload = {
      transactionId,
      action,
      actor,
      target,
      metadata,
      timestamp: new Date().toISOString()
    };
    
    const payloadString = JSON.stringify(payload, Object.keys(payload).sort());
    const signature = await this.sign(payloadString, privateKey);
    return this.toBase64(signature);
  }

  /**
   * Verify audit signature
   */
  static async verifyAuditSignature(
    transactionId: string,
    action: string,
    actor: string,
    target: string,
    metadata: Record<string, any>,
    signature: string,
    publicKey: Uint8Array
  ): Promise<boolean> {
    const payload = {
      transactionId,
      action,
      actor,
      target,
      metadata,
      timestamp: new Date().toISOString()
    };
    
    const payloadString = JSON.stringify(payload, Object.keys(payload).sort());
    const signatureBytes = this.fromBase64(signature);
    
    return await this.verify(signatureBytes, payloadString, publicKey);
  }
}