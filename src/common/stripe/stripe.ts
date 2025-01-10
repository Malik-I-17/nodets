import * as dotenv from 'dotenv';
import path from 'path';
import Stripe from 'stripe';
dotenv.config({ path: path.join(__dirname, '../../../.env') });
const stripe = new Stripe(process.env.STRIPE_KEY);

export default stripe;
