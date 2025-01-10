import { Sample } from "../models/Sample.model";

export const createSample = async (sampleData: any) => {
    // const newUser = new Sample(sampleData);
    // const savedUser = await newUser.save();

    const savedUser = await Sample.create(sampleData);
    return savedUser;
};