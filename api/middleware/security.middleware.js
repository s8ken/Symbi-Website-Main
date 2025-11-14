const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const compression = require('compression');
const { body, validationResult, param, query } = require('express-validator');

const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", 'wss:', 'ws:'],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
    },
  },
  crossOriginEmbedderPolicy: false,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
});

const createRateLimit = (windowMs, max, message, skipSuccessfulRequests = false) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      success: false,
      error: 'Rate limit exceeded',
      message,
      retryAfter: Math.ceil(windowMs / 1000),
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests,
    keyGenerator: (req) => {
      return req.user?.id || req.ip;
    },
  });
};

const authRateLimit = createRateLimit(15 * 60 * 1000, 5, 'Too many authentication attempts, please try again later');
const apiRateLimit = createRateLimit(15 * 60 * 1000, 100, 'Too many API requests, please try again later', true);
const trustDeclarationRateLimit = createRateLimit(60 * 60 * 1000, 10, 'Too many trust declarations, please try again later');
const strictRateLimit = createRateLimit(15 * 60 * 1000, 20, 'Rate limit exceeded for sensitive operations');

const sanitizeInput = [
  mongoSanitize({
    replaceWith: '_',
    onSanitize: ({ req, key }) => {
      console.warn(`Sanitized input detected: ${key} in ${req.method} ${req.path}`);
    },
  }),
  hpp({
    whitelist: ['tags', 'categories', 'sort'],
  }),
];

const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required',
        message: 'Please authenticate to access this resource',
      });
    }

    const userRoles = Array.isArray(req.user.roles) ? req.user.roles : [req.user.role];
    const requiredRoles = Array.isArray(roles) ? roles : [roles];

    const hasRequiredRole = requiredRoles.some((role) => userRoles.includes(role) || userRoles.includes('admin'));

    if (!hasRequiredRole) {
      return res.status(403).json({
        success: false,
        error: 'Insufficient permissions',
        message: `Access denied. Required roles: ${requiredRoles.join(', ')}`,
        userRoles: userRoles,
      });
    }

    next();
  };
};

const validateJWTScopes = (requiredScopes) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const userScopes = req.user.scopes || [];
    const hasRequiredScope = requiredScopes.every((scope) => userScopes.includes(scope) || userScopes.includes('*'));

    if (!hasRequiredScope) {
      return res.status(403).json({
        success: false,
        error: 'Insufficient scope',
        message: `Required scopes: ${requiredScopes.join(', ')}`,
        userScopes: userScopes,
      });
    }

    next();
  };
};

const validationSchemas = {
  trustDeclaration: [
    body('trustDeclaration.agent_id').isString().isLength({ min: 1, max: 100 }).matches(/^[a-zA-Z0-9_-]+$/),
    body('trustDeclaration.agent_name').isString().isLength({ min: 1, max: 200 }).trim().escape(),
    body('trustDeclaration.compliance_score').optional().isFloat({ min: 0, max: 1 }),
    body('trustDeclaration.guilt_score').optional().isFloat({ min: 0, max: 1 }),
  ],
  userRegistration: [
    body('email').isEmail().normalizeEmail(),
    body('password')
      .isLength({ min: 8, max: 128 })
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/),
    body('username').isString().isLength({ min: 3, max: 30 }).matches(/^[a-zA-Z0-9_]+$/),
  ],
  mongoId: [param('id').isMongoId()],
  pagination: [query('page').optional().isInt({ min: 1, max: 1000 }), query('limit').optional().isInt({ min: 1, max: 100 })],
};

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((error) => ({
      field: error.path || error.param,
      message: error.msg,
      value: error.value,
      location: error.location,
    }));

    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      message: 'The request contains invalid data',
      details: formattedErrors,
    });
  }
  next();
};

const requestLogger = (req, res, next) => {
  const startTime = Date.now();
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  req.requestId = requestId;
  req.startTime = startTime;
  console.log(
    JSON.stringify({
      type: 'request',
      requestId,
      method: req.method,
      path: req.path,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      userId: req.user?.id,
      timestamp: new Date().toISOString(),
    })
  );
  const originalSend = res.send;
  res.send = function (data) {
    const duration = Date.now() - startTime;
    console.log(
      JSON.stringify({
        type: 'response',
        requestId,
        statusCode: res.statusCode,
        duration,
        contentLength: data ? data.length : 0,
        timestamp: new Date().toISOString(),
      })
    );
    originalSend.call(this, data);
  };
  next();
};

const logSecurityEvent = (eventType, details, req) => {
  console.warn(
    JSON.stringify({
      type: 'security_event',
      eventType,
      details,
      requestId: req.requestId,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      userId: req.user?.id,
      timestamp: new Date().toISOString(),
    })
  );
};

const detectSuspiciousActivity = (req, res, next) => {
  const suspiciousPatterns = [
    /\b(union|select|insert|delete|drop|create|alter)\b/i,
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /\$\{.*\}/g,
    /\.\.\/g,
  ];
  const checkString = JSON.stringify(req.body) + JSON.stringify(req.query) + JSON.stringify(req.params);
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(checkString)) {
      logSecurityEvent('suspicious_input', { pattern: pattern.toString(), input: checkString.substring(0, 200) }, req);
      return res.status(400).json({ success: false, error: 'Invalid input detected', message: 'Request contains potentially malicious content' });
    }
  }
  next();
};

const validateContentType = (allowedTypes = ['application/json']) => {
  return (req, res, next) => {
    if (req.method === 'GET' || req.method === 'DELETE') {
      return next();
    }
    const contentType = req.get('Content-Type');
    if (!contentType || !allowedTypes.some((type) => contentType.includes(type))) {
      return res.status(415).json({
        success: false,
        error: 'Unsupported Media Type',
        message: `Content-Type must be one of: ${allowedTypes.join(', ')}`,
      });
    }
    next();
  };
};

const requestSizeLimiter = (maxSize = '10mb') => {
  return (req, res, next) => {
    const contentLength = req.get('Content-Length');
    const maxBytes = parseSize(maxSize);
    if (contentLength && parseInt(contentLength) > maxBytes) {
      return res.status(413).json({ success: false, error: 'Payload Too Large', message: `Request size exceeds ${maxSize} limit` });
    }
    next();
  };
};

function parseSize(size) {
  const units = { b: 1, kb: 1024, mb: 1024 * 1024, gb: 1024 * 1024 * 1024 };
  const match = size.toLowerCase().match(/^(\d+(?:\.\d+)?)(\w+)?$/);
  if (!match) return 0;
  return parseFloat(match[1]) * (units[match[2]] || 1);
}

module.exports = {
  securityHeaders,
  sanitizeInput,
  compression: compression(),
  authRateLimit,
  apiRateLimit,
  trustDeclarationRateLimit,
  strictRateLimit,
  requireRole,
  validateJWTScopes,
  validationSchemas,
  handleValidationErrors,
  requestLogger,
  logSecurityEvent,
  detectSuspiciousActivity,
  validateContentType,
  requestSizeLimiter,
};

