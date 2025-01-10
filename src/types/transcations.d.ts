export enum TransactionType {
  PLANSUBSCRIPTION = 'plan_subscription',
  WALLETCREDIT = 'wallet_credit',
  WALLETDEBIT = 'wallet_debit',
  ADDLINK = 'add_link',
}

export interface stripeCredentials {
  customer_id: string | null;
}

export interface ITransaction extends Document {
  user_id: mongoose.Types.ObjectId;
  type: TransactionType;
  plan_name: string | null;
  price_id: string | null;
  stripe_subscription_id: string | null;
  recurring_interval: 'day' | 'week' | 'month' | 'year' | null;
  amount: number;
  currency: string | null;
  transaction_id?: string | null;
  stripe_json: string | null;
  stripe_credentials: stripeCredentials;
  expiredAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: string | null;
}
