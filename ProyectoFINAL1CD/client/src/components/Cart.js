import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const Cart = ({ cartItems }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/cart`);
        const productsData = response.data.data;
        setCartProducts(productsData);

        // Calculate total price
        const total = productsData.reduce((acc, product) => {
          const productPrice = product.price * product.quantity;
          return acc + productPrice;
        }, 0);
        setTotalPrice(total);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartProducts();
  }, [cartItems]);

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/cart/${productId}`);
      const updatedCartProducts = cartProducts.filter((product) => product._id !== productId);
      setCartProducts(updatedCartProducts);

      // Recalculate total price
      const total = updatedCartProducts.reduce((acc, product) => {
        const productPrice = product.price * product.quantity;
        return acc + productPrice;
      }, 0);
      setTotalPrice(total);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-4 p-4">
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Cart</h2>
          <ul className="list-group">
            {cartProducts.map((product, index) => (
              <li key={index} className="list-group-item d-flex justify-content-around w-100">
              <div className='container mt-4'>
              <div className="row">
                <div className="col-md-6">
                  <h4>{product.name}</h4>
                  <img src={product.image} alt={product.name} style={{ maxWidth: '125px' }} />
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <p className='text-success'>Monthly Rent: ${product.price}</p>
                    <p className='text-success'>Rented Months: {product.quantity}</p>
                    <p className='text-info'>Total Amount: ${product.price * product.quantity}</p>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 my-4 text-center">
          <div style={{ marginTop: '50px' }}>
            <div className="card border-dark mb-3" style={{ maxWidth: '20rem' }}>
              <h4 className="card-header">Checkout</h4>
              <div className="card-body">
                <h4 className="card-title">Total Cart Amount</h4>
                <p className="card-text text-warning">${totalPrice}</p>
                <NavLink to="/checkout" className="btn btn-outline-info">
                  Go to Checkout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </Container>
  );
};

export default Cart;