import jwt from 'jsonwebtoken';
import moment from 'moment';
// import { randomBytes } from 'node:crypto';
// import { Request, Response, NextFunction } from 'express';
import { encryptData } from '../../common/crypto/crypto';
// import { nanoid } from 'nanoid';

// Function to generate JWT token
export const generateToken = async (user: any) => {
  const payload = {
    sub: user,
    role: user.role, // Add role to the payload
    iat: moment().unix(),
    // exp: moment().add(process.env.EXPIRY_TIME, 'hours').unix(),
  };
  return jwt.sign(payload, process.env.JWT_SECRET || '');
};

export const ApiResponse = async (
  res: any,
  response: { status: number; message: string; validation?: any; totalCount?: any; data?: any },
) => {
  return res.status(response.status).json(response);
};


