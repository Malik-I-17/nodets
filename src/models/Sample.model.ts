import mongoose, { Document, Schema } from 'mongoose';

export interface ISampleModel extends Document {
  name: string;
  age: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

const sampleModelSchema = new Schema<ISampleModel>(
  {
    name: {
      type: String,
    },
    age: {
      type: String,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

sampleModelSchema.methods.softDelete = async function (): Promise<void> {
  this.deleted_at = new Date();
  await this.save();
};
export const Sample = mongoose.model<ISampleModel>('sample', sampleModelSchema);
