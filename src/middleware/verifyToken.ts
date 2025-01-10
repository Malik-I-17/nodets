import { Request, Response, NextFunction } from 'express';
// import { statusCode } from '../utils/constant/status_code';
import { ApiResponse } from '../utils/hooks/util';
// import { authMessage } from '../utils/constant/auth_message';

// Middleware to verify token
export async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    // return ApiResponse(res, {
    //   status: statusCode.UNAUTHORIZED,
    //   message: authMessage.UNAUTHORIZED_TOKEN,
    //   validation: null,
    //   data: null,
    // });
  }

  next();
}
