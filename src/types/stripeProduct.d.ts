import { ObjectId } from 'mongoose';

export interface InterfaceStripeProduct {
  _id?: mongoose.Types.ObjectId;
  product: string;
  name: string;
  product_description: string;
  is_featured: boolean;
  most_popuplar: boolean;
  pricing_id: string;
  active: boolean;
  currency: string;
  recurring_interval: 'day' | 'week' | 'month' | 'year';
  amount: number;
  unit_amount: number;
  unit_amount_decimal: number;
  stripe_json: string;
  plan_category: 'subscription' | 'add_link';
  features: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
