import mongoose, { Document, Schema } from 'mongoose';

export interface ITestModel extends Document {
    district: string;
    mobileNumber: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

const testModelSchema = new Schema<ITestModel>(
    {
        district: {
            type: String,


        },
        mobileNumber: {
            type: String,
            unique: true

        },
        deletedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true, // Automatically handle createdAt and updatedAt
    }
);

export const Test = mongoose.model<ITestModel>('examplemodel', testModelSchema);




// required: true, // Ensure mobileNumber is mandatory
// unique: true, // Ensure mobileNumber is unique



//   required: true, // Ensure district is mandatory


