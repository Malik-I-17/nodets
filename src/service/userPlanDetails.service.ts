import { Plan } from "../models/UserPlanDetails.model";

export const userCreateplandetails = async (sampleData: any) => {
    // const newUser = new Sample(sampleData);
    // const savedUser = await newUser.save();

    const savedUser = await Plan.create(sampleData);
    return savedUser;
};





export const planDetail = async (param: any) => {
    console.log('param: ', param);
    const getUserDetails = await Plan.find()
    return getUserDetails
}