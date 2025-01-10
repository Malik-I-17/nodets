import mongoose, { Document, Schema } from 'mongoose';

export interface IPlan extends Document {
  user_code: string;
  pack_code: string;
  plan_code: string;
  amount: number;
  quantity: number;
  plan_registered_date: Date;
  no_of_days: number;
  plan_expired_date: Date;
  plan_status: string;
  deletedAt?: Date;

}

const planSchema = new Schema<IPlan>(
  {
    user_code: {
      type: String,
    },
    pack_code: {
      type: String,
    },
    plan_code: {
      type: String,
    },
    amount: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    plan_registered_date: {
      type: Date,
    },
    no_of_days: {
      type: Number,
    },
    plan_expired_date: {
      type: Date,
    },
    plan_status: {
      type: String,
      default: 'active',
    },
    deletedAt: {
        type: Date,
        default: null,
      },

  },
  {
    timestamps: true,
  }
);

planSchema.methods.softDelete = async function (): Promise<void> {
  this.plan_status = 'cancelled';
  await this.save();
};

export const Plan = mongoose.model<IPlan>('Plan', planSchema);
