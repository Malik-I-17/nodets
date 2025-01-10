import { Request, Response, NextFunction } from "express";
import axios from 'axios';
import { getOtp, login, updateOtp, updateUserProfile, userCreate } from '../service/user.service'
import { ApiResponse, generateToken } from "../utils/hooks/util";
import { uploadS3 } from "../common/aws/uploadService";
import { generateOtp } from "../common/crypto/crypto";

export const userRegisteration = async (req: Request, res: Response) => {
    try {
        const userData = req.body;

        const otp = generateOtp();

        await sendOtp(userData.user_mobile, otp); // Await the OTP response

        userData.user_otp = otp;
        await userCreate(userData);

        return ApiResponse(res, {
            status: 201,
            message: "OTP is succesfully sent to your mobile number...",
            validation: null,
            totalCount: null,
            data: null
        });
    }
    catch (error: any) {
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null,
        });
    }

}

export const updateProfile = async (req: Request, res: Response) => {
    try {

        const user_id = req.headers.user_id;
        const userData = req.body;
        userData.user_id = user_id;

        if (!req.file) {
            delete userData.user_photo_url;
        } else {
            const profile_image = await uploadS3(req.file, 'profile_image', res);
            userData.user_photo_url = profile_image !== undefined ? profile_image : '';
        }

        const user = await updateUserProfile(userData);

        return ApiResponse(res, {
            status: 201,
            message: "user profile updated successfully",
            validation: null,
            totalCount: null,
            data: user,
        });
    }
    catch (error: any) {
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null,
        });
    }

}

export const userLogin = async (req: Request, res: Response) => {
    try {

        const userData = req.body;

        const otp = generateOtp();

        await sendOtp(userData.user_mobile, otp); // Await the OTP response

        userData.user_otp = otp;
        await login(userData);

        return ApiResponse(res, {
            status: 201,
            message: "OTP is succesfully sent to your mobile number...",
            validation: null,
            totalCount: null,
            data: null
        });
    }

    catch (error: any) {
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null
        });
    }

}

export const verifyOtp = async (req: Request, res: Response) => {
    try {

        const userData = req.body;

        const user = await getOtp(userData);

        if ((userData.user_otp).toString() !== user?.user_otp) {
            return ApiResponse(res, {
                status: 400,
                message: "Invalid OTP",
                validation: null,
                totalCount: null,
                data: null
            });
        }

        const updatedUser = await updateOtp(userData);

        const tokenData = {
            user_id: updatedUser?._id,
            name: updatedUser?.user_name,
            email: updatedUser?.user_email,
            mobile: updatedUser?.user_mobile
        }

        const token = await generateToken(tokenData);

        return ApiResponse(res, {
            status: 201,
            message: "OTP verified successfully",
            validation: null,
            totalCount: null,
            data: { updatedUser, token: token }
        });
    }
    catch (error: any) {
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null
        });
    }

}

// Define an interface for the API response
interface SpringEdgeResponse {
    status: string;
    message: string;
    details: any;
}


// Function to send OTP
const sendOtp = async (mobile: string, otp: string): Promise<SpringEdgeResponse> => {

    const apiKey = "10521d051205v3586de2y8u64591z742qz";
    const sender = 'VIDVAA';
    const baseUrl = 'https://instantalerts.co/api/web/send';

    const params = new URLSearchParams({
        apikey: apiKey,
        sender: sender,
        to: mobile,
        message: `OTP for your verification on VIDHVAA is ${otp} and is valid for 100 seconds. Do not share this OTP with anyone for security reasons.`
    });

    const response = await axios.post<SpringEdgeResponse>(baseUrl, params);
    return response.data;

};

