import mongoose, { Document, Schema } from "mongoose";



export enum Type {
    Guest = 'guest',
    Paid = 'paid'
}

export interface IUser extends Document {

    user_code: string; // ?
    user_name: string;
    user_mobile: number;
    user_email: string;
    user_organization: string;
    gender: string;
    age: number;
    user_type: Type;
    user_reg_mode: string;
    user_mpin: number;
    auth_token: string;
    firebase_token: string;
    user_status: string;
    login_status: string;
    camping_flag: string;
    user_reg_no: string;
    qualification: string;
    web_token: string;
    user_state: string;
    device_id: string;
    user_whatsapp: string;
    register_otp_verified: Date; // ?
    user_district: string;
    image: string;
    mail_verified: Date;
    promo_verified: Date;
    otp_verified_at: Date;
    user_otp: string;
    temp_token: string;
    address: string;
    user_photo_url: string
    deletedAt?: Date;

}

const userModeSchema = new Schema<IUser>(
    {

        user_code: { type: String },
        user_name: { type: String },
        user_mobile: { type: Number },
        user_email: { type: String },
        user_organization: { type: String },
        gender: { type: String, default: null },
        age: { type: Number, default: null },
        user_type: { type: String, enum: Object.values(Type), default: Type.Guest },
        user_reg_mode: { type: String, default: null }, // ?
        user_mpin: { type: Number, default: null },
        auth_token: { type: String, default: null },
        firebase_token: { type: String, default: null },
        user_status: { type: String, default: null }, // ?
        login_status: { type: String, default: null }, // ?
        camping_flag: { type: String, default: null }, // ?
        user_reg_no: { type: String, default: null },
        qualification: { type: String, default: null },
        web_token: { type: String, default: null },
        user_state: { type: String, default: null },
        device_id: { type: String, default: null },
        user_whatsapp: { type: String, default: null }, // ?
        register_otp_verified: { type: Date, default: null }, // ?
        user_district: { type: String, default: null },
        image: { type: String, default: null }, // ?
        mail_verified: { type: Date, default: null }, // ?
        promo_verified: { type: Date, default: null }, // ?
        otp_verified_at: { type: Date, default: null },
        user_otp: { type: String, default: null },
        temp_token: { type: String, default: null },
        user_photo_url: { type: String, default: null },
        address: { type: String, default: null },
        deletedAt: { type: Date, default: null }

    },
    {
        timestamps: true
    }
)


export const User = mongoose.model<IUser>("userdetails", userModeSchema)
