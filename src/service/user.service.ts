import mongoose from "mongoose";
import { User } from "../models/User.model";

export const userCreate = async (userData: any) => {
    const saveUser = await User.create(userData)
    return saveUser
}

export const updateUserProfile = async (userData: any) => {
    const userId = new mongoose.Types.ObjectId(userData.user_id);
    const updateProfile = await User.findOneAndUpdate(
        { _id: userId },
        { $set: userData },
        { new: true }
    )
    return updateProfile;
}

export const updateOtp = async (userData: any) => {

    const updateOtp = await User.findOneAndUpdate(
        { user_otp: userData.user_otp },
        { $set: { otp_verified_at: new Date(), user_otp: null } },
        { new: true }
    )
    return updateOtp;
}

export const login = async (userData: any) => {
    const updateProfile = await User.findOneAndUpdate(
        { user_mobile: userData.user_mobile },
        { $set: { user_otp: userData.user_otp } },
        { new: true }
    )
    return updateProfile;
}


export const getOtp = async (userData: any) => {
    const getUserDetails = await User.findOne({user_otp: userData.user_otp})
    return getUserDetails;
}


export const getUsers = async (userData: any) => {
    const getUserDetails = await User.findOne({_id: userData})
    return getUserDetails;
}