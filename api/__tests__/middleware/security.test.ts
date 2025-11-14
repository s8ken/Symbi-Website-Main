import { Request, Response, NextFunction } from 'express';
import { sonateSecurity } from '../middleware/security';

describe('Security Middleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      body: {},
      headers: {},
      ip: '127.0.0.1',
      method: 'POST',
      url: '/api/test',
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
    next = jest.fn();
  });

  describe('requestSizeLimiter', () => {
    it('should allow requests within size limit', () => {
      const middleware = sonateSecurity.requestSizeLimiter('10mb');
      req.headers['content-length'] = '1024';
      
      middleware(req as Request, res as Response, next);
      
      expect(next).toHaveBeenCalledWith();
    });

    it('should block requests exceeding size limit', () => {
      const middleware = sonateSecurity.requestSizeLimiter('1kb');
      req.headers['content-length'] = '2048';
      
      middleware(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(413);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Request entity too large',
        message: 'Request size exceeds limit of 1kb',
      });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('validateContentType', () => {
    it('should allow valid content types', () => {
      const middleware = sonateSecurity.validateContentType(['application/json']);
      req.headers['content-type'] = 'application/json';
      
      middleware(req as Request, res as Response, next);
      
      expect(next).toHaveBeenCalledWith();
    });

    it('should block invalid content types', () => {
      const middleware = sonateSecurity.validateContentType(['application/json']);
      req.headers['content-type'] = 'text/html';
      
      middleware(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(415);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Unsupported media type',
        message: 'Content type text/html not supported',
      });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('sanitizeInput', () => {
    it('should sanitize malicious input', () => {
      req.body = {
        name: '<script>alert("xss")</script>',
        description: 'Normal text',
      };
      
      sonateSecurity.sanitizeInput(req as Request, res as Response, next);
      
      expect(req.body.name).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
      expect(req.body.description).toBe('Normal text');
      expect(next).toHaveBeenCalledWith();
    });

    it('should handle nested objects', () => {
      req.body = {
        user: {
          name: '<script>alert("xss")</script>',
          email: 'test@example.com',
        },
        items: [
          { name: '<img src="x" onerror="alert(1)">', value: 123 },
        ],
      };
      
      sonateSecurity.sanitizeInput(req as Request, res as Response, next);
      
      expect(req.body.user.name).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
      expect(req.body.user.email).toBe('test@example.com');
      expect(req.body.items[0].name).toBe('&lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt;');
      expect(req.body.items[0].value).toBe(123);
      expect(next).toHaveBeenCalledWith();
    });
  });

  describe('detectSuspiciousActivity', () => {
    it('should detect SQL injection attempts', () => {
      req.body = {
        query: "SELECT * FROM users WHERE id = '1' OR '1'='1'",
      };
      
      sonateSecurity.detectSuspiciousActivity(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Suspicious activity detected',
        message: 'Potential SQL injection attempt',
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should detect XSS attempts', () => {
      req.body = {
        comment: '<script>alert(document.cookie)</script>',
      };
      
      sonateSecurity.detectSuspiciousActivity(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Suspicious activity detected',
        message: 'Potential XSS attempt',
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should allow legitimate requests', () => {
      req.body = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a normal message',
      };
      
      sonateSecurity.detectSuspiciousActivity(req as Request, res as Response, next);
      
      expect(next).toHaveBeenCalledWith();
    });
  });

  describe('rateLimiter', () => {
    it('should allow requests within rate limit', () => {
      const middleware = sonateSecurity.rateLimiter({
        windowMs: 60000,
        max: 5,
        message: 'Too many requests',
      });
      
      middleware(req as Request, res as Response, next);
      
      expect(next).toHaveBeenCalledWith();
    });

    it('should block requests exceeding rate limit', () => {
      const middleware = sonateSecurity.rateLimiter({
        windowMs: 60000,
        max: 0,
        message: 'Too many requests',
      });
      
      middleware(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(429);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Too many requests',
        message: 'Too many requests',
      });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('authenticateToken', () => {
    it('should allow requests with valid token', () => {
      req.headers.authorization = 'Bearer valid-token';
      
      sonateSecurity.authenticateToken(req as Request, res as Response, next);
      
      expect(req.body.authenticated).toBe(true);
      expect(next).toHaveBeenCalledWith();
    });

    it('should block requests without token', () => {
      sonateSecurity.authenticateToken(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Unauthorized',
        message: 'Access token required',
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should block requests with invalid token', () => {
      req.headers.authorization = 'Bearer invalid-token';
      
      sonateSecurity.authenticateToken(req as Request, res as Response, next);
      
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Unauthorized',
        message: 'Invalid access token',
      });
      expect(next).not.toHaveBeenCalled();
    });
  });
});