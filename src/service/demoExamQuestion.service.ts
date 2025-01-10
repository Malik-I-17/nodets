import {Question  } from "../models/DemoExamQuestion.model";

export const newCreatedemoquestion = async (sampleData: any) => {
    console.log('sampleData: ', sampleData);
    const newUser = new Question(sampleData);
    const savedUser = await newUser.save();

    // const savedUser = await Question.create(sampleData);
    return savedUser;
};

export const getQuestion = async (param: any) => {
    console.log('param: ', param);
    const getUserDetails = await Question.find({
        ln_code: param.params})
    return getUserDetails
}