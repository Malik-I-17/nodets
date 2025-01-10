import stripe from '../stripe/stripe';

export async function getStripeBalance() {
  try {
    const balance = await stripe.balance.retrieve();
    return balance;
  } catch (error: any) {
    return error.message;
  }
}

export const getAccountBalance = async (accountId: any) => {
  try {
    const balance = await stripe.balance.retrieve({
      stripeAccount: accountId, 
    });

    const availableBalance = balance.available[0].amount / 100;
    const pendingBalance = balance.pending[0].amount / 100;

    const response = {
      availableBalance: `$${availableBalance.toFixed(2)}`,
      pendingBalance: `$${pendingBalance.toFixed(2)}`,
    };
    return response;
  } catch (error: any) {
    console.error('Error fetching account balance:', error.message);
    return error;
  }
};

