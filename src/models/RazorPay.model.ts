import { integer } from "aws-sdk/clients/cloudfront";
import mongoose, { Document, Schema } from "mongoose";

enum Type {
    Pending = "pending",
    Paid = "paid"
}

export interface IRazorModel extends Document {

    plan_code: string,
    plan_name: string,
    plan_amt: number,
    order_id: string,
    user_name: string,
    user_mobile: integer,
    user_email: string,
    payment_id: string,
    razorpay_signature: string,
    pay_type: string,
    pay_status: string,
    coupon_code: string,
    no_of_attempt: number,

}

const RazorModelSchema = new Schema<IRazorModel>(
    {
        plan_code: { type: String },
        plan_name: { type: String },
        plan_amt: { type: Number },
        order_id: { type: String },
        user_name: { type: String },
        user_mobile: { type: Number },
        user_email: { type: String },
        payment_id: { type: String, default: null },
        razorpay_signature: { type: String, default: null },
        pay_type: { type: String, default: null },
        pay_status: { type: String, enum: Object.values(Type), default: Type.Pending },
        coupon_code: { type: String, default: null },
        no_of_attempt: { type: Number, default: 1 },
    },
    {
        timestamps: true
    }
)

export const RazorModel = mongoose.model('paymentdetails', RazorModelSchema)