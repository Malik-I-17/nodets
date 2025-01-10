import { NextFunction, Request, Response } from 'express';
import { ApiResponse } from '../utils/hooks/util';
import { getQuestion, newCreatedemoquestion } from '../service/demoExamQuestion.service';

export const questionCreate = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await newCreatedemoquestion(data);

        return ApiResponse(res, { status: 201, message: '', validation: '', totalCount: '', data: user })
    } catch (error: any) {
        // Error catch
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null,
        });
    }
};

export const getQuestions = async (req: Request, res: Response) => {
    try {
        const params = req.query;
        const user = await getQuestion(params);

        return ApiResponse(res, { status: 200, message: '', validation: '', totalCount: '', data: user })
    } catch (error: any) {
        // Error catch
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null,
        });
    }
};



const formatId = "TNPSC" + 1