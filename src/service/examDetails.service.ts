
import mongoose from "mongoose";
import { ExamDetails } from "../models/ExamDetails.model";
export const createExamDetails = async (sampleData: any) => {

    const savedUser = await ExamDetails.create(sampleData);
    return savedUser;
};


export const updateExamDetails = async (examData: any) => {
    const mongosId = new mongoose.Types.ObjectId(examData.exam_id)
    const savedUser = await ExamDetails.findOneAndUpdate(
        { _id: mongosId },
        { $push: { schedule_exam: examData.schedule_exam, online_exam: examData.online_exam, daily_task: examData.daily_task }, },
        { new: true }
    );
    return savedUser;
};