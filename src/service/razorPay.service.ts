import { RazorModel } from "../models/RazorPay.model";


export const createRazorOrder = async (razorData: any) => {
    const razor = await RazorModel.create(razorData)
    return razor
}


export const checkPendingPayment = async (razorData: any) => {
    const pendingData = await RazorModel.findOne({
        plan_code: razorData.plan_code,
        user_mobile: razorData.user_mobile,
        pay_status: "pending"
    })
    return pendingData
}


export const updatePayment = async (razorData: any) => {
    const updateData=await RazorModel.findOneAndUpdate({
        plan_code:razorData.plan_code,
        user_mobile:razorData.user_mobile
    })
    return updateData
    
}