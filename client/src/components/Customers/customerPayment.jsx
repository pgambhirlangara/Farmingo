import {Elements, PaymentElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.PUBLISHABLE_KEY}`);

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};



export default function CustomerPayment() {
    const options = {
      // passing the client secret obtained from the server
      clientSecret: `${process.env.SECRET_KEY}`,
    };
  
    return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    );
  };