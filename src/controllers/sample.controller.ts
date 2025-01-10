import { NextFunction, Request, Response } from 'express';
import { createSample } from '../service/sample.service';
import { ApiResponse } from '../utils/hooks/util';
import { newCreatesample } from '../service/test.service';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const user = await createSample(data);

        return ApiResponse(res, { status: 200, message: '', validation: '', totalCount: '', data: user })
    } catch (error: any) {
        // Error catch
        next();
    }
};

