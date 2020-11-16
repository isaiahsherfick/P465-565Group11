import React from "react";
import ReactDOM from "react-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

//import ElementDemos from "./ElementDemos";

import SplitForm from "./SplitForm";

import "./payment.css";
import Header from './Header'
import { getUsername } from '../../helpers/common';
import { getPrice } from '../../helpers/common';



const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

// const demos = [
//   {
//     path: "/split-card-elements",
//     label: "Split Card Elements",
//     component: SplitForm
//   }
// ];

const Payment = () => {
  return (
      <div>

      <Header/>
      <div><h4 style={{marginTop:'100px'}}>Hi {getUsername()}, enter your card details below to confirm your bookings.<br/>
  Total amount to be paid ${getPrice()}</h4></div>
      <Elements stripe={stripePromise}>
        <SplitForm />
      </Elements>
      </div>

  );
};

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

export default Payment;
