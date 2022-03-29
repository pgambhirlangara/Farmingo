import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CustomerPayment from "./customerPayment";


const PUBLIC_KEY = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`);

const StripeComponent = () => {
  return (
    <Elements stripe={PUBLIC_KEY}>
        <CustomerPayment />
    </Elements>
  );
};

export default StripeComponent;