import { Test } from "../models/Test.model";

export const newCreatesample = async (sampleData: any) => {
    console.log('sampleData: ', sampleData);
    // const newUser = new Test(sampleData);
    // const savedUser = await newUser.save();

    const savedUser = await Test.create(sampleData);
    return savedUser;
};

