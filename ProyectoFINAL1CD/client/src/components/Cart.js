import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Navbar from './NavBar';

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
          const productPrice = product.price * product.quantity * product.number
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


    <Container className="mt-1 p-2 ">
    <Navbar/> 
    <div className="container mt-4 ">
    
      <div className="row ">
        <div className="col-md-8">
          <h4>Shopping Cart</h4>
          <ul className="list-group ">
            {cartProducts.map((product, index) => (
              <li key={index} className="  border-primary list-group-item w-100 ">
              <div className='container mt-4'>
              <div className="row  ">
                <div className="col-md-6">
                  <h4>{product.name}</h4>
                  <img src={product.image} alt={product.name} style={{ maxWidth: '125px' }} />
                  </div>
                  <div className="col-md-6">
                  <div className="text-right">
                  <p className='text-info'>Qty: {product.number}</p>
                  <p className='text-info'>Monthly Rent: ${product.price}</p>
                  <p className='text-info'>Rented Months: {product.quantity}</p>
                  <p className='text-warning'>Total Amount: ${product.price * product.quantity * product.number}</p>
                  <button
                    className="btn border-primary btn-outline-danger btn-sm"
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
        <div className="d-flex justify-content-center col-md-4  text-center">
          <div style={{ marginTop: '100px' }} className='w-100 '>
            <div className="card  border-primary  mb-3" style={{ maxWidth: '80rem' }}>
            <h4 className="card-title mt-3">Cart Amount</h4>
              <div className="card-body">
                <p className="card-text text-warning">Total ${totalPrice}</p>
                <NavLink to="/checkout" className="btn  border-primary btn-outline-info">
                Proceed to Checkout
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