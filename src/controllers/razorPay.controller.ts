import { NextFunction, Request, Response } from 'express';
import Razorpay from "razorpay";
import { ApiResponse } from '../utils/hooks/util';
import { createRazorOrder, checkPendingPayment } from '../service/razorPay.service';


export const createOrder = async (req: Request, res: Response) => {
    try {
        const headerData = req.headers;
        const razorData = req.body;

        razorData.user_name = headerData.name
        razorData.user_email = headerData.email
        razorData.user_mobile = headerData.mobile

        const razorpayInstance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID || "",
            key_secret: process.env.RAZORPAY_SECRET || ""
        })
        
        const razorPay = {
            amount: razorData.plan_amt,
            currency: "INR",
            notes: razorData,
        }


        // razorpayInstance.orders.create({ amount:razorData.amount, currency:razorData.currency, notes:razorData.notes },)
        const pendingData = await checkPendingPayment(razorData)
        const orderId = await razorpayInstance.orders.create(razorPay)

        

        razorData.order_id = orderId.id

        await createRazorOrder(razorData)


        return ApiResponse(res, { status: 201, message: '', validation: '', totalCount: '', data: orderId })
    }
    catch (error: any) {
        // Error catch
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null,
        });
    }
}