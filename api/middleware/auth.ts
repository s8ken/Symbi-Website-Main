import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SYMBIError, ErrorCodes } from '../../shared/types.js';

/**
 * Authentication middleware
 */
export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      throw new SYMBIError('No authorization header provided', ErrorCodes.UNAUTHORIZED, 401);
    }

    const token = authHeader.startsWith('Bearer ') 
      ? authHeader.substring(7) 
      : authHeader;

    const secret = process.env.JWT_SECRET || 'your-secret-key';
    
    const decoded = jwt.verify(token, secret) as any;
    
    // Add user information to request
    req.user = {
      id: decoded.userId,
      email: decoded.email,
      role: decoded.role || 'user',
      permissions: decoded.permissions || []
    };

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      next(new SYMBIError('Token has expired', ErrorCodes.UNAUTHORIZED, 401));
    } else if (error instanceof jwt.JsonWebTokenError) {
      next(new SYMBIError('Invalid token', ErrorCodes.UNAUTHORIZED, 401));
    } else {
      next(error);
    }
  }
};

/**
 * Role-based authorization middleware
 */
export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new SYMBIError('User not authenticated', ErrorCodes.UNAUTHORIZED, 401));
      return;
    }

    const userRole = req.user.role;
    if (!roles.includes(userRole)) {
      next(new SYMBIError('Insufficient permissions', ErrorCodes.FORBIDDEN, 403));
      return;
    }

    next();
  };
};

/**
 * Permission-based authorization middleware
 */
export const requirePermission = (permissions: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new SYMBIError('User not authenticated', ErrorCodes.UNAUTHORIZED, 401));
      return;
    }

    const userPermissions = req.user.permissions || [];
    const hasPermission = permissions.some(permission => 
      userPermissions.includes(permission)
    );

    if (!hasPermission) {
      next(new SYMBIError('Insufficient permissions', ErrorCodes.FORBIDDEN, 403));
      return;
    }

    next();
  };
};