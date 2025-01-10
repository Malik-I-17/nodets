
import mongoose, { Document, Schema } from 'mongoose';

export interface IOptions extends Document {
  name: string;
}

export interface IQuestion extends Document {

  qs_code: string;
  exam_code: string;
  ln_code: string;
  qs_order: number;
  qs_pattern: string;
  qs_seconds: number;
  qs_question: string;
  options: IOptions[];
  correct_ans: string;
  qs_explain: string;
  deletedAt?: Date;
}

const optionSchema = new Schema<IOptions>(
  {
    name: {
      type: String
    }
  }
)

const questionSchema = new Schema<IQuestion>(
  {
    qs_code: {
      type: String,
      default: null,
    },
    exam_code: {
      type: String,
      default: null,
    },
    ln_code: {
      type: String,
      default: null,
    },
    qs_order: {
      type: Number,
      default: null,
    },
    qs_pattern: {
      type: String,
      default: null,
    },
    qs_seconds: {
      type: Number,
      default: null,
    },
    qs_question: {
      type: String,
      default: null,
    },
    options: [optionSchema],
    correct_ans: {
      type: String,
      default: null,
    },
    qs_explain: {
      type: String,
      default: null,
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

questionSchema.methods.softDelete = async function (): Promise<void> {
  this.deleted_at = new Date();
  await this.save();
};

export const Question = mongoose.model<IQuestion>('Question', questionSchema);