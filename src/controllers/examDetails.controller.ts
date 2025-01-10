import { NextFunction, Request, Response } from 'express';
import { createSample } from '../service/sample.service';
import { ApiResponse } from '../utils/hooks/util';
import { newCreatesample } from '../service/test.service';
import { createExamDetails, updateExamDetails } from '../service/examDetails.service';

export const createExamDetail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const user = await createExamDetails(data);

        return ApiResponse(res, { status: 200, message: '', validation: '', totalCount: '', data: user })
    } catch (error: any) {
        // Error catch
        next();
    }
};


export const updateExamDetail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exam_id = req.params.id;
        const userData = req.body;
        console.log('userData: ', userData);
        userData.exam_id = exam_id;
        const user = await updateExamDetails(userData);
      
        return ApiResponse(res, { status: 200, message: '', validation: '', totalCount: '', data: user })
    } catch (error: any) {
        // Error catch
        next();
    }
};