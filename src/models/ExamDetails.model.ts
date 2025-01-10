
import mongoose, { Document, Schema } from 'mongoose';

export interface IOptions extends Document {
    name: string;
    value: string;
}

export interface IOnlineExam extends Document {
    exam_code: string;
    language: string;
    exam_name: string;
    category: string;
    sub_category: string;
    question_order: string;
    question_pattern: string;
    question: string;
    question_image: string;
    options: IOptions[];
    correct_answer: string;
    explanation: string;
    deletedAt: Date;
}

export interface IScheduleExam extends Document {
    exam_code: string;
    language: string;
    exam_name: string;
    category: string;
    sub_category: string;
    question_order: string;
    question_pattern: string;
    question: string;
    question_image: string;
    options: IOptions[];
    correct_answer: string;
    explanation: string;
    deletedAt: Date;

}

export interface IDailyTask extends Document {
    exam_code: string;
    language: string;
    exam_name: string;
    category: string;
    sub_category: string;
    question_order: string;
    question_pattern: string;
    question: string;
    question_image: string;
    options: IOptions[];
    correct_answer: string;
    explanation: string;
    deletedAt: Date;
}

export interface IExamDetails extends Document {
    online_exam: IOnlineExam;
    schedule_exam: IScheduleExam;
    daily_task: IDailyTask;
    deletedAt?: Date;
}

const optionSchema = new Schema<IOptions>(
    {
        name: {
            type: String
        },
        value: {
            type: String
        }
    }
)

const onlineExamSchema = new Schema<IOnlineExam>(
    {
        exam_code: {
            type: String
        },
        language: {
            type: String
        },
        exam_name: {
            type: String
        },
        category: {
            type: String
        },
        sub_category: {
            type: String
        },
        question_order: {
            type: String
        },
        question_pattern: {
            type: String
        },
        question: {
            type: String
        },
        question_image: {
            type: String
        },
        options: [optionSchema],
        correct_answer: {
            type: String
        },
        explanation: {
            type: String
        },
        deletedAt: {
            type: Date
        }

    },
    {
        timestamps: true,
    }
)

const dailyTaskSchema = new Schema<IDailyTask>(
    {
        exam_code: {
            type: String
        },
        language: {
            type: String
        },
        exam_name: {
            type: String
        },
        category: {
            type: String
        },
        sub_category: {
            type: String
        },
        question_order: {
            type: String
        },
        question_pattern: {
            type: String
        },
        question: {
            type: String
        },
        question_image: {
            type: String
        },
        options: [optionSchema],
        correct_answer: {
            type: String
        },
        explanation: {
            type: String
        },
        deletedAt: {
            type: Date
        }

    },
    {
        timestamps: true,
    }
)

const scheduleExamSchema = new Schema<IScheduleExam>(
    {
        exam_code: {
            type: String
        },
        language: {
            type: String
        },
        exam_name: {
            type: String
        },
        category: {
            type: String
        },
        sub_category: {
            type: String
        },
        question_order: {
            type: String
        },
        question_pattern: {
            type: String
        },
        question: {
            type: String
        },
        question_image: {
            type: String
        },
        options: [optionSchema],
        correct_answer: {
            type: String
        },
        explanation: {
            type: String
        },
        deletedAt: {
            type: Date
        }
    },
    {
        timestamps: true,
    }
)

const examDetailsSchema = new Schema<IExamDetails>(
    {
        online_exam: [onlineExamSchema],
        daily_task: [dailyTaskSchema],
        schedule_exam: [scheduleExamSchema],
        deletedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

examDetailsSchema.methods.softDelete = async function (): Promise<void> {
    this.deletedAt = new Date();
    await this.save();
};

export const ExamDetails = mongoose.model<IExamDetails>('examdetails', examDetailsSchema);