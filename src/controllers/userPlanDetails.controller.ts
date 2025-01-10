import { NextFunction, Request, Response } from 'express';
import { ApiResponse } from '../utils/hooks/util';
import { planDetail, userCreateplandetails } from '../service/userPlanDetails.service';
import { updateUserProfile } from '../service/user.service';
export const userplandetailsCreate = async (req: Request, res: Response) => {
    try {
        const user_id = req.headers.user_id;
        const data = req.body;
        data.user_id = user_id;
        const payment: any = await userCreateplandetails(data);
        const user = await updateUserProfile(data);
        payment.user_mpin = user?.user_mpin
        payment.user_reg_no = user?.user_reg_no
        return ApiResponse(res, { status: 201, message: '', validation: '', totalCount: '', data: payment })
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




export const planDetails = async (req: Request, res: Response) => {
    try {
        const params = req.query;
        const user = await planDetail(params);


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