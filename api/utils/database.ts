import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let db: Db;

export async function connectDatabase(): Promise<void> {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/symbi';
    client = new MongoClient(uri);
    
    await client.connect();
    db = client.db();
    
    console.log('✅ Connected to MongoDB');
    
    // Create indexes for better performance
    await createIndexes();
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    // Don't exit process, continue with mock data
    console.log('⚠️  Continuing with mock data mode');
  }
}

async function createIndexes(): Promise<void> {
  if (!db) return;
  
  try {
    // Trust declarations
    await db.collection('trust_declarations').createIndex({ agentId: 1, timestamp: -1 });
    await db.collection('trust_declarations').createIndex({ issuer: 1 });
    
    // DIDs
    await db.collection('dids').createIndex({ did: 1 }, { unique: true });
    await db.collection('dids').createIndex({ controller: 1 });
    
    // Verifiable credentials
    await db.collection('credentials').createIndex({ id: 1 }, { unique: true });
    await db.collection('credentials').createIndex({ issuer: 1 });
    await db.collection('credentials').createIndex({ 'credentialSubject.id': 1 });
    
    // AI orchestration logs
    await db.collection('ai_orchestrations').createIndex({ orchestrationId: 1 }, { unique: true });
    await db.collection('ai_orchestrations').createIndex({ timestamp: -1 });
    
    // Compliance assessments
    await db.collection('compliance_assessments').createIndex({ agentId: 1, framework: 1 });
    await db.collection('compliance_assessments').createIndex({ timestamp: -1 });
    
    // Audit logs
    await db.collection('audit_logs').createIndex({ timestamp: -1 });
    await db.collection('audit_logs').createIndex({ type: 1 });
    await db.collection('audit_logs').createIndex({ actor: 1 });
    
    console.log('✅ Database indexes created');
  } catch (error) {
    console.error('❌ Failed to create indexes:', error);
  }
}

export function getDatabase(): Db | null {
  return db;
}

export function getClient(): MongoClient | null {
  return client;
}

export async function closeDatabase(): Promise<void> {
  if (client) {
    await client.close();
    console.log('✅ Disconnected from MongoDB');
  }
}