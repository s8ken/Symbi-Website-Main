import { createClient, RedisClientType } from 'redis';

let client: RedisClientType;
let isConnected = false;

export async function connectRedis(): Promise<void> {
  try {
    const url = process.env.REDIS_URL || 'redis://localhost:6379';
    client = createClient({ url });
    
    client.on('error', (err) => {
      console.error('❌ Redis Client Error:', err);
      isConnected = false;
    });
    
    client.on('connect', () => {
      console.log('🔌 Redis Client Connected');
      isConnected = true;
    });
    
    client.on('disconnect', () => {
      console.log('🔌 Redis Client Disconnected');
      isConnected = false;
    });
    
    await client.connect();
    
    // Test connection
    await client.ping();
    console.log('✅ Connected to Redis');
    
  } catch (error) {
    console.error('❌ Redis connection failed:', error);
    isConnected = false;
    // Don't exit process, continue without Redis
    console.log('⚠️  Continuing without Redis caching');
  }
}

export function getRedisClient(): RedisClientType | null {
  return isConnected ? client : null;
}

export function isRedisConnected(): boolean {
  return isConnected;
}

export async function setCache(key: string, value: any, ttl: number = 3600): Promise<void> {
  if (!isConnected || !client) return;
  
  try {
    await client.setEx(key, ttl, JSON.stringify(value));
  } catch (error) {
    console.error('❌ Redis set cache error:', error);
  }
}

export async function getCache(key: string): Promise<any | null> {
  if (!isConnected || !client) return null;
  
  try {
    const value = await client.get(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('❌ Redis get cache error:', error);
    return null;
  }
}

export async function deleteCache(key: string): Promise<void> {
  if (!isConnected || !client) return;
  
  try {
    await client.del(key);
  } catch (error) {
    console.error('❌ Redis delete cache error:', error);
  }
}

export async function closeRedis(): Promise<void> {
  if (client) {
    await client.disconnect();
    isConnected = false;
    console.log('✅ Disconnected from Redis');
  }
}