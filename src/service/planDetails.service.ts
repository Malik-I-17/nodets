import { Plandetails } from "../models/PlanDetails.model";

export const Createplandetails = async (sampleData: any) => {
    // const newUser = new Sample(sampleData);
    // const savedUser = await newUser.save();

    const savedUser = await Plandetails.create(sampleData);
    return savedUser;
};

