import { NextFunction, Request, Response } from 'express';
import { ApiResponse } from '../utils/hooks/util';
import {Createplandetails  } from '../service/planDetails.service';
export const plandetailsCreate = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await Createplandetails(data);

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
