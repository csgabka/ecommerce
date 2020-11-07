import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Hkrg8ENlWGZtGAD8sgyfGOu9ccyNxWitZKUnf20BBm5AUc3DUXdVQq4s8xQ019JRhd6OFhVudEwrZOgn1K2Pgxh007PxvpbBw';

  const onToken = token => {
    console.log(token);
    alert('Payment Sucessful');
  }

  return (
    <StripeCheckout
    label='Pay Now'
    name='Clothing Ecommerce'
    billingAddress
    shippingAddress
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    currency='GBP'
    stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
