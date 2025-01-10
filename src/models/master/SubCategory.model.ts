import mongoose, { Document, Schema } from 'mongoose';

// Enum Definitions
export enum Status {
  Active = 'active',
  Inactive = 'inactive',
}

export interface ISubCategory extends Document {
  name: string; 
  status: Status; 
  deletedAt?: Date; 
}

const  subcategorySchema = new Schema<ISubCategory>(
  {
    name: { type: String},
    status: { type: String, enum: Object.values(Status), default: Status.Active },
    deletedAt: { type: Date, default: null,}, 
  },
  {
    timestamps: true, 
  }
);

export const  SubCategory = mongoose.model<ISubCategory>('subcategory', subcategorySchema);