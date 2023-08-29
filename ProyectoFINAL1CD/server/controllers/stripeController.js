const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51NjW7fLde9dViuECfz4lZAmjT8cHrUl9lRuShYPRla7Iifm1cu3cO4UKYkfAWt88YwWtWFiIRcbMnFsovPwbc9bb00GKZI1wpM");

async function createPaymentIntent(paymentMethodId, amount, cardholderName) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      payment_method: paymentMethodId,
      confirm: true,
      payment_method_options: {
        card: {
          request_three_d_secure: "any",
        },
      },
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never", // Disable redirects
      },
      metadata: {
        cardholderName, // Adding the cardholder's name to the metadata
      },
    });

    return paymentIntent;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createPaymentIntent,
};
