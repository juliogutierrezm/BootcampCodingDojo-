import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { Container, Row, Col, Image } from "react-bootstrap";

const OldProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${productId}`);
      const updatedProducts = products.filter(
        (product) => product._id !== productId
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product) => {
    const newCartItem = {
      name: product.name,
      price: product.price,
      image: product.image, 
      quantity: 1, 
      description: product.description,
    };

    axios
      .post('http://localhost:8000/api/cart', newCartItem)
      .then((res) => {
        console.log('Product added to cart:', res.data.data);
        setCart([...cart, res.data.data]);
      })
      .catch((err) => {
        console.log('Error adding to cart:', err);
      });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      </div>
      <h2 className="mb-4">Product List</h2>
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={12} md={6} lg={4} className="mb-4">
              <div className="border p-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  rounded
                  className="mb-2 img-fluid"
                  style={{ maxHeight: '200px' }} // Ajusta esta altura según tus necesidades
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <Link
                  to={`/product/${product._id}`}
                  className="btn btn-primary mr-2"
                >
                  Details
                </Link>
                <Link
                  to={`/edit/${product._id}`}
                  className="btn btn-warning mr-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success ml-2"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Cart cartItems={cart} />
    </div>
  );
};

export default OldProductList;
