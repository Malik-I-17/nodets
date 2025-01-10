import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// import { statusCode } from '../utils/constant/status_code';
import { ApiResponse } from '../utils/hooks/util';
// import { authMessage } from '../utils/constant/auth_message';

// Middleware to verify token
export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader: any = req.headers.authorization;
    if (!authHeader || authHeader.trim() === '') {
      return ApiResponse(res, {
        status: 401,
        message: 'Invalid token',
        validation: null,
        data: null,
      });

    } else {
      const token = authHeader.split(' ')[1];
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
      req.headers['user_id'] = decoded.sub.user_id;
      req.headers['name'] = decoded.sub.name;
      req.headers['email'] = decoded.sub.email;
      req.headers['mobile'] = decoded.sub.mobile;
      next();
    }
  } catch (error) {
    return ApiResponse(res, {
      status: 401,
      message: 'Unauthorized',
      validation: null,
      data: null
    });
  }
};
