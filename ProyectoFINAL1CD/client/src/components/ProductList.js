import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { Container, Row, Col, Image, Dropdown } from "react-bootstrap";
import { ImCart } from "react-icons/im";
import Navbar from "./NavBar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data.data);
        initializeSelectedQuantities(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const initializeSelectedQuantities = (products) => {
    const initialQuantities = {};
    products.forEach((product) => {
      initialQuantities[product._id] = 1;
    });
    setSelectedQuantities(initialQuantities);
  };

  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const addToCart = (product) => {
    const newCartItem = {
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: selectedQuantities[product._id],
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
   
   
    <Container className="mt-1 p-2">
    <Navbar/>
      <Container >  
       <h2 className="mb-4 mt-4 text-start  text-secondary font-weight-bold">
        Products
      </h2>
        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={12} md={6} lg={4} className="mb-4 ">
              <div className="border border-primary p-3 d-flex flex-column align-items-center">
              <Link to={`/product/${product._id}`}>
              <Image
              src={product.image}
              alt={product.name}
              rounded
              className="mb-2 img-fluid"
              style={{ maxHeight: '200px' }}
              />
              </Link>
              <h5 className="text-center">{product.name}</h5>
               
                <p className="text-center">Monthly Rent: ${product.price}</p>
                <div className=" d-flex justify-content-around w-100 ">
                <Dropdown className="mt-auto">
                  <Dropdown.Toggle variant="outline-info border-primary" id="dropdown-basic">
                    Months: {selectedQuantities[product._id]}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((quantity) => (
                      <Dropdown.Item
                        key={quantity}
                        onClick={() => handleQuantityChange(product._id, quantity)}
                      >
                        {quantity}
                      </Dropdown.Item>
                    ))}
                    </Dropdown.Menu>
                    </Dropdown>
                  <button
                    className="btn border-primary btn-outline-success"
                    onClick={() => addToCart(product)}
                  >
                    Add to <ImCart />
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
 {/*      <Cart cartItems={cart} /> */}
    </Container>
  );
};

export default ProductList;