const { sonateSecurity } = require('../middleware/security');

describe('Security Middleware', () => {
  let req;
  let res;
  let next;

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
      
      middleware(req, res, next);
      
      expect(next).toHaveBeenCalledWith();
    });

    it('should block requests exceeding size limit', () => {
      const middleware = sonateSecurity.requestSizeLimiter('1kb');
      req.headers['content-length'] = '2048';
      
      middleware(req, res, next);
      
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
      
      middleware(req, res, next);
      
      expect(next).toHaveBeenCalledWith();
    });

    it('should block invalid content types', () => {
      const middleware = sonateSecurity.validateContentType(['application/json']);
      req.headers['content-type'] = 'text/html';
      
      middleware(req, res, next);
      
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
      
      sonateSecurity.sanitizeInput(req, res, next);
      
      expect(req.body.name).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
      expect(req.body.description).toBe('Normal text');
      expect(next).toHaveBeenCalledWith();
    });
  });

  describe('detectSuspiciousActivity', () => {
    it('should detect SQL injection attempts', () => {
      req.body = {
        query: "SELECT * FROM users WHERE id = '1' OR '1'='1'",
      };
      
      sonateSecurity.detectSuspiciousActivity(req, res, next);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Suspicious activity detected',
        message: 'Potential SQL injection attempt',
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should allow legitimate requests', () => {
      req.body = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a normal message',
      };
      
      sonateSecurity.detectSuspiciousActivity(req, res, next);
      
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
      
      middleware(req, res, next);
      
      expect(next).toHaveBeenCalledWith();
    });
  });

  describe('authenticateToken', () => {
    it('should allow requests with valid token', () => {
      req.headers.authorization = 'Bearer valid-token';
      
      sonateSecurity.authenticateToken(req, res, next);
      
      expect(req.body.authenticated).toBe(true);
      expect(next).toHaveBeenCalledWith();
    });

    it('should block requests without token', () => {
      sonateSecurity.authenticateToken(req, res, next);
      
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Unauthorized',
        message: 'Access token required',
      });
      expect(next).not.toHaveBeenCalled();
    });
  });
});