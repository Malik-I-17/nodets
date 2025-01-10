// import mongoose, { Document, Schema } from 'mongoose';

// export interface IPlandetails extends Document {
//   plan_code: string;
//   plan_name: string;
//   plan_duration: number;
//   plan_amount: number;
//   plan_details: string;
//   plan_course: string;
//   no_of_days: number;
//   discount_type: string;
//   discount: number;
//   offer_type: string;
//   combo_plan_status: boolean;
//   referal_type: string;
//   offer: number;
//   plan_start_date: Date;
//   plan_end_date: Date;
//   plan_status: string;
//   plan_image: string;
//   daily_exam_status: boolean;
//   model_exam_status: boolean;
//   online_exam_status: boolean;
//   schedule_exam_status: boolean;
//   live_exam_status: boolean;
//   material_status: boolean;
//   current_affairs: boolean;
//   plan_gst: number;
//   exam_start_delay_minutes: number;
//   result_status: boolean;
//   analytics_status: boolean;
//   analytics_timer_status: boolean;
//   explanation_status: boolean;
//   feedback_status: boolean;
//   analytics_timer_seconds: number;
//   register_title: string;
//   register_sub_title: string;
//   timer_info: string;
//   timer_info_status: boolean;
//   plan_subscribe_date: Date;
//   plan_action_name: string;
//   payment_action_name: string;
//   payment_instruction: string;
//   question_timer_instruction: string;
//   sub_title: string;
//   sub_title_size: number;
//   sub_title_color: string;
//   title_color: string;
//   title_size: number;
//   view_action_name: string;
//   view_action_color: string;
//   view_action_text_color: string;
//   action_color: string;
//   action_text_size: number;
//   plan_icon: string;
//   back_color: string;
//   tag_one: string;
//   tag_one_color: string;
//   tag_one_text_color: string;
//   tag_one_size: number;
//   tag_two: string;
//   tag_two_color: string;
//   tag_two_text_color: string;
//   tag_two_size: number;
//   new_plan: boolean;
//   background_image: string;
// }

// const plandetailsSchema = new Schema<IPlandetails>(
//   {
//     plan_code: { type: String, default: null },
//     plan_name: { type: String, default: null },
//     plan_duration: { type: Number, default: null },
//     plan_amount: { type: Number, default: null },
//     plan_details: { type: String, default: null },
//     plan_course: { type: String, default: null },
//     no_of_days: { type: Number, default: null },
//     discount_type: { type: String, default: null },
//     discount: { type: Number, default: null },
//     offer_type: { type: String, default: null },
//     combo_plan_status: { type: Boolean, default: false },
//     referal_type: { type: String, default: null },
//     offer: { type: Number, default: null },
//     plan_start_date: { type: Date, default: null },
//     plan_end_date: { type: Date, default: null },
//     plan_status: { type: String, default: null },
//     plan_image: { type: String, default: null },
//     daily_exam_status: { type: Boolean, default: false },
//     model_exam_status: { type: Boolean, default: false },
//     online_exam_status: { type: Boolean, default: false },
//     schedule_exam_status: { type: Boolean, default: false },
//     live_exam_status: { type: Boolean, default: false },
//     material_status: { type: Boolean, default: false },
//     current_affairs: { type: Boolean, default: false },
//     plan_gst: { type: Number, default: null },
//     exam_start_delay_minutes: { type: Number, default: null },
//     result_status: { type: Boolean, default: false },
//     analytics_status: { type: Boolean, default: false },
//     analytics_timer_status: { type: Boolean, default: false },
//     explanation_status: { type: Boolean, default: false },
//     feedback_status: { type: Boolean, default: false },
//     analytics_timer_seconds: { type: Number, default: null },
//     register_title: { type: String, default: null },
//     register_sub_title: { type: String, default: null },
//     timer_info: { type: String, default: null },
//     timer_info_status: { type: Boolean, default: false },
//     plan_subscribe_date: { type: Date, default: null },
//     plan_action_name: { type: String, default: null },
//     payment_action_name: { type: String, default: null },
//     payment_instruction: { type: String, default: null },
//     question_timer_instruction: { type: String, default: null },
//     sub_title: { type: String, default: null },
//     sub_title_size: { type: Number, default: null },
//     sub_title_color: { type: String, default: null },
//     title_color: { type: String, default: null },
//     title_size: { type: Number, default: null },
//     view_action_name: { type: String, default: null },
//     view_action_color: { type: String, default: null },
//     view_action_text_color: { type: String, default: null },
//     action_color: { type: String, default: null },
//     action_text_size: { type: Number, default: null },
//     plan_icon: { type: String, default: null },
//     back_color: { type: String, default: null },
//     tag_one: { type: String, default: null },
//     tag_one_color: { type: String, default: null },
//     tag_one_text_color: { type: String, default: null },
//     tag_one_size: { type: Number, default: null },
//     tag_two: { type: String, default: null },
//     tag_two_color: { type: String, default: null },
//     tag_two_text_color: { type: String, default: null },
//     tag_two_size: { type: Number, default: null },
//     new_plan: { type: Boolean, default: false },
//     background_image: { type: String, default: null },
//   },
//   {
//     timestamps: true,
//   }
// );

// export const Plandetails = mongoose.model<IPlandetails>('Plandetails', plandetailsSchema);




import mongoose, { Document, Schema } from 'mongoose';
// Enum Definitions
// export enum DiscountType {
//   Percentage = 'percentage',
//   Flat = 'flat',
// }

// export enum OfferType {
//   Special = 'special',
//   Regular = 'regular',
// }

export enum PlanStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export interface IPlandetails extends Document {
  plan_code: string;
  plan_name: string;
  plan_duration: number;
  plan_amount: number;
  plan_details: string;
  plan_course: string;
  no_of_days: number;
  discount_type: number;
  discount: number;
  offer_type: number;
  combo_plan_status: number;
  referal_type: string;
  offer: number;
  plan_start_date: Date;
  plan_end_date: Date;
  plan_status: PlanStatus;
  plan_image: string;
  daily_exam_status: number;
  model_exam_status: number;
  online_exam_status: number;
  schedule_exam_status: number;
  live_exam_status: number;
  material_status: number;
  current_affairs: number;
  plan_gst: number;
  exam_start_delay_minutes: number;
  result_status: string;
  analytics_status: number;
  analytics_timer_status: number;
  explanation_status: number;
  feedback_status: number;
  analytics_timer_seconds: number;
  register_title: string;
  register_sub_title: string;
  timer_info: string;
  timer_info_status: number;
  plan_subscribe_date: Date;
  plan_action_name: string;
  payment_action_name: string;
  payment_instruction: string;
  question_timer_instruction: string;
  sub_title: string;
  sub_title_size: number;
  sub_title_color: string;
  title_color: string;
  title_size: number;
  view_action_name: string;
  view_action_color: string;
  view_action_text_color: string;
  action_color: string;
  action_text_size: number;
  plan_icon: string;
  back_color: string;
  tag_one: string;
  tag_one_color: string;
  tag_one_text_color: string;
  tag_one_size: number;
  tag_two: string;
  tag_two_color: string;
  tag_two_text_color: string;
  tag_two_size: number;
  new_plan: number;
  background_image: string;
  exam_instruction:string;
  deletedAt?: Date;
}

const plandetailsSchema = new Schema<IPlandetails>(
  {
    plan_code: { type: String, default: null },
    plan_name: { type: String, default: null },
    plan_duration: { type: Number, default: null },
    plan_amount: { type: Number, default: null },
    plan_details: { type: String, default: null },
    plan_course: { type: String, default: null },
    no_of_days: { type: Number, default: null },
    discount_type: { type: Number, default: null },
    discount: { type: Number, default: null },
    offer_type: { type: Number, default: null },
    combo_plan_status: { type: Number, default: null },
    referal_type: { type: String, default: null },
    offer: { type: Number, default: null },
    plan_start_date: { type: Date, default: null },
    plan_end_date: { type: Date, default: null },
    plan_status: { type: String, enum: Object.values(PlanStatus), default: PlanStatus.Active },
    plan_image: { type: String, default: null },
    daily_exam_status: { type: Number, default: null},
    model_exam_status: { type: Number, default: null },
    online_exam_status: { type: Number, default: null },
    schedule_exam_status: { type: Number, default: null },
    live_exam_status: { type: Number, default: null },
    material_status: { type: Number, default: null },
    current_affairs: { type: Number, default: null },
    plan_gst: { type: Number, default: null },
    exam_start_delay_minutes: { type: Number, default: null },
    result_status: { type: String, default: null },
    analytics_status: { type: Number, default: null},
    analytics_timer_status: { type: Number, default: null },
    explanation_status: { type: Number, default: null },
    feedback_status: { type: Number, default: null },
    analytics_timer_seconds: { type: Number, default: null },
    register_title: { type: String, default: null },
    register_sub_title: { type: String, default: null },
    timer_info: { type: String, default: null },
    timer_info_status: { type: Number, default: null},
    plan_subscribe_date: { type: Date, default: null },
    plan_action_name: { type: String, default: null },
    payment_action_name: { type: String, default: null },
    payment_instruction: { type: String, default: null },
    question_timer_instruction: { type: String, default: null },
    sub_title: { type: String, default: null },
    sub_title_size: { type: Number, default: null },
    sub_title_color: { type: String, default: null },
    title_color: { type: String, default: null },
    title_size: { type: Number, default: null },
    view_action_name: { type: String, default: null },
    view_action_color: { type: String, default: null },
    view_action_text_color: { type: String, default: null },
    action_color: { type: String, default: null },
    action_text_size: { type: Number, default: null },
    plan_icon: { type: String, default: null },
    back_color: { type: String, default: null },
    tag_one: { type: String, default: null },
    tag_one_color: { type: String, default: null },
    tag_one_text_color: { type: String, default: null },
    tag_one_size: { type: Number, default: null },
    tag_two: { type: String, default: null },
    tag_two_color: { type: String, default: null },
    tag_two_text_color: { type: String, default: null },
    tag_two_size: { type: Number, default: null },
    new_plan: { type: Number, default: null },
    background_image: { type: String, default: null },
    exam_instruction:{type: String, default: null},
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

export const Plandetails = mongoose.model<IPlandetails>('Plandetails', plandetailsSchema);