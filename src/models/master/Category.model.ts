import mongoose, { Document, Schema } from 'mongoose';

// Enum Definitions
export enum Status {
  Active = 'active',
  Inactive = 'inactive',
}

export interface ICategory extends Document {
  name: string; 
  status: Status; 
  deletedAt?: Date; 
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String},
    status: { type: String, enum: Object.values(Status), default: Status.Active },
    deletedAt: { type: Date, default: null,}, 
  },
  {
    timestamps: true, 
  }
);

export const Category = mongoose.model<ICategory>('category', categorySchema);