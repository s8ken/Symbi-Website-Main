import { execSync } from 'child_process';
import os from 'os';
import Redis from 'ioredis';
import pkg from '../package.json' with { type: 'json' };

class HealthCheckService {
  constructor() {
    this.redisClient = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: process.env.REDIS_PORT || 6379,
      password: process.env.REDIS_PASSWORD,
      enableOfflineQueue: false,
      maxRetriesPerRequest: 1,
    });
    this.startTime = Date.now();
  }

  async checkRedis() {
    try {
      const start = Date.now();
      await this.redisClient.ping();
      const responseTime = Date.now() - start;
      
      return {
        status: 'healthy',
        responseTime,
        connected: true,
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        error: error.message,
        connected: false,
      };
    }
  }

  async checkSystem() {
    try {
      const cpuUsage = process.cpuUsage();
      const memoryUsage = process.memoryUsage();
      const systemLoad = os.loadavg();
      const freeMemory = os.freemem();
      const totalMemory = os.totalmem();

      return {
        status: 'healthy',
        uptime: Date.now() - this.startTime,
        cpu: {
          user: cpuUsage.user,
          system: cpuUsage.system,
          loadAverage: systemLoad,
        },
        memory: {
          used: memoryUsage.heapUsed,
          total: memoryUsage.heapTotal,
          external: memoryUsage.external,
          system: {
            free: freeMemory,
            total: totalMemory,
            percentage: ((totalMemory - freeMemory) / totalMemory * 100).toFixed(2),
          },
        },
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        error: error.message,
      };
    }
  }

  async checkDependencies() {
    try {
      const dependencies = Object.keys(pkg.dependencies || {});
      const devDependencies = Object.keys(pkg.devDependencies || {});
      
      return {
        status: 'healthy',
        totalDependencies: dependencies.length,
        totalDevDependencies: devDependencies.length,
        criticalDependencies: dependencies.filter(dep => 
          ['express', 'redis', 'jsonwebtoken', 'bcrypt'].includes(dep)
        ),
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        error: error.message,
      };
    }
  }

  async checkGit() {
    try {
      const commitHash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
      const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
      const lastCommit = execSync('git log -1 --format=%ai', { encoding: 'utf8' }).trim();
      
      return {
        status: 'healthy',
        commitHash,
        branch,
        lastCommit,
      };
    } catch (error) {
      return {
        status: 'unknown',
        error: 'Git repository not available',
      };
    }
  }

  async getHealthStatus() {
    const [redis, system, dependencies, git] = await Promise.all([
      this.checkRedis(),
      this.checkSystem(),
      this.checkDependencies(),
      this.checkGit(),
    ]);

    const overallStatus = 
      redis.status === 'healthy' && 
      system.status === 'healthy' && 
      dependencies.status === 'healthy' 
        ? 'healthy' 
        : 'degraded';

    return {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      version: pkg.version,
      services: {
        redis,
        system,
        dependencies,
        git,
      },
    };
  }

  async getDetailedHealth() {
    const basicHealth = await this.getHealthStatus();
    
    return {
      ...basicHealth,
      performance: {
        responseTime: Date.now() - this.startTime,
        cpuCount: os.cpus().length,
        networkInterfaces: os.networkInterfaces(),
      },
      environment: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        redisHost: process.env.REDIS_HOST,
        logLevel: process.env.LOG_LEVEL,
      },
    };
  }
}

export default HealthCheckService;