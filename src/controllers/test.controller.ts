import { NextFunction, Request, Response } from 'express';
import { newCreatesample } from '../service/test.service';

export const test = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const user = await newCreatesample(data);

        res.json({ status: 200, message: 'success', data: user })
    } catch (error: any) {
        // Error catch
        next();
    }
};