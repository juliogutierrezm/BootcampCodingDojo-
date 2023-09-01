import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51NjW7fLde9dViuECcUDE4MGRZG0pXJpECUiCMNkg2j75Itsvp9YmmFS3BJVKWZZ7iYEEbo25CEEMjOaZcZsS0Bhw00t8mwl9PM");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cartProducts, setCartProducts] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [cardholderName, setCardholderName] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/cart");
        const productsData = response.data.data;
        setCartProducts(productsData);

        const calculatedTotalAmount = productsData.reduce((acc, product) => {
          return acc + product.price * product.quantity * product.number;
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
      billing_details: { name: cardholderName },
    });

    if (!error) {
      const response = await axios.post("http://localhost:8000/api/checkout", {
        paymentMethodId: paymentMethod.id,
        amount: paymentAmount * 100,
        products: cartProducts,
      });

      if (response.status === 200) {
        console.log("Payment successful!");
        const successMessage = "Payment successful!";
        setMensaje(successMessage);

        setTimeout(() => {
          setMensaje("");
          setCardholderName("");
          elements.getElement(CardElement).clear();
        }, 2000);

      } else {
        console.error("Payment failed.");
        const errorMessage = "Payment failed.";
        setMensaje(errorMessage);
      }
    }
  };

  return (
    
    <div className="container mt-4">
      <div className="row mt-4">
        <div className="col-md-6 d-flex  border-primary flex-column justify-content-between">
          <h2>Checkout   ({cartProducts.length } Items)</h2>
          {cartProducts.map((product, index) => (
            <div key={index} className="mb-3 p-3 bg-primary rounded">
              <h5>{product.name}</h5>
              <p>Total Price: ${product.price * product.quantity * product.number}</p>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card text-center border-primary card-body ">
            <h2>Make your payment</h2>
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
              <p className="font-weight-bold text-success">
                Total Amount: ${paymentAmount}
              </p>
              <button className="btn border-primary btn-outline-warning w-100" type="submit">
              Place your order
            </button>
            
            </div>
            </form>
            <div>
            {mensaje && <div className="alert alert-success mt-3 text-center">{mensaje}</div>}
            </div>
            <div className="col-md-6">
            </div>
            </div>
            </div>
            <a href="/cart" className="btn btn-link borde-primary mb-3">
              Back to Cart
            </a>{" "}
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