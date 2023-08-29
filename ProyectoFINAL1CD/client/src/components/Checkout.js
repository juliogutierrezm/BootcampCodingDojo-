import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe("pk_test_51NjW7fLde9dViuECcUDE4MGRZG0pXJpECUiCMNkg2j75Itsvp9YmmFS3BJVKWZZ7iYEEbo25CEEMjOaZcZsS0Bhw00t8mwl9PM");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cartProducts, setCartProducts] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [cardholderName, setCardholderName] = useState(""); // State for cardholder's name

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/cart`);
        const productsData = response.data.data;
        setCartProducts(productsData);

        const calculatedTotalAmount = productsData.reduce((acc, product) => {
          return acc + product.price * product.quantity;
        }, 0);
        setPaymentAmount(calculatedTotalAmount);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: { name: cardholderName }, // Set cardholder's name
    });

    if (!error) {
      // Send payment details and paymentMethod.id to your backend
      const response = await axios.post('http://localhost:8000/api/checkout', {
        paymentMethodId: paymentMethod.id,
        amount: paymentAmount * 100,
        products: cartProducts,
      });

      if (response.status === 200) {
        console.log("Payment successful!");
        // Handle success on frontend
      } else {
        console.error("Payment failed.");
        // Handle failure on frontend
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <h2>Your Cart</h2>
          {cartProducts.map((product, index) => (
            <div key={index} className="mb-3 p-3 bg-light rounded">
              <h5>{product.name}</h5>
              <p>Total Price: ${product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card card-body ">
            <h2>Checkout</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name on Card"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
              />
              <CardElement className="form-control mb-3" />
            </div>
            <div className="text-center">
              <p className="font-weight-bold text-success">Total Amount: ${paymentAmount}</p>
              <button className="btn btn-outline-info btn-block" type="submit" disabled={!stripe} style={{ width: '150px' }}>
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
  
};

function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p2">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Checkout;
