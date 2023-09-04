import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,} from "react-router-dom";
import { Container, Row, Col, Image, Dropdown } from "react-bootstrap";
import { ImCart } from "react-icons/im";
import Navbar from "./NavBar";
import "./styles.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [selectedNumbers, setSelectedNumbers] = useState({});
  const [mensaje, setMensaje] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data.data);
        initializeSelectedQuantities(res.data.data);
        initializeSelectedNumbers(res.data.data);
        setFilteredProducts(res.data.data); 
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

  const initializeSelectedNumbers = (products) => {
    const initialNumbers = {};
    products.forEach((product) => {
      initialNumbers[product._id] = 1;
    });
    setSelectedNumbers(initialNumbers);
  };

  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const handleNumberChange = (productId, number) => {
    setSelectedNumbers((prevNumbers) => ({
      ...prevNumbers,
      [productId]: number,
    }));
  };

  const addToCart = (product) => {
    const newCartItem = {
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: selectedQuantities[product._id],
      number: selectedNumbers[product._id],
      description: product.description,
    };

    axios
      .post('http://localhost:8000/api/cart', newCartItem)
      .then((res) => {
        console.log('Product added to cart:', res.data.data);
        setCart([...cart, res.data.data]);

        const successMessage = `${product.name} added to cart`;
        setMensaje(successMessage);

        setTimeout(() => {
          setMensaje('');
        }, 2000);
      })
      .catch((err) => {
        console.log('Error adding to cart:', err);
      });
  };
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "") {

      setFilteredProducts(products);
    } else {

      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <Container className="mt-1 p-2">
      <Navbar />
      <div className="d-flex justify-content-center fixed">
        {mensaje && <div className="floating-alert">{mensaje}</div>}
      </div>
      <Container>
        <h2 className="mb-4 mt-4 text-start text-secondary font-weight-bold">
          Products
        </h2>
        <div>
        <select
        className="form-select bg-dark text-white border-primary mb-4"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">All Categories</option>
          <option value="cameras">Cameras</option>
          <option value="chairs">Chairs</option>
          <option value="controllers">Controllers</option>
          <option value="desks">Desks</option>
          <option value="headsets">Headsets</option>
          <option value="keyboards">Keyboards</option>
          <option value="laptops">Laptops</option>
          <option value="microphones">Microphones</option>
          <option value="monitors">Monitors</option>
          <option value="mouses">Mouses</option>
          <option value="sets">Sets</option>
          <option value="webcams">Webcams</option>
          <option value="others">Others</option>
          {/* Agrega más categorías según sea necesario */}
        </select>

      </div>
        <Row>
        {filteredProducts.map((product) => (
            <Col key={product._id} xs={12} md={6} lg={4} className="mb-4">
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
                <div className="d-flex justify-content-between w-100 align-items-center">
                <Dropdown>
                <Dropdown.Toggle variant="outline-info border-primary" id={`dropdown-${product._id}`}>
                 Mth: {selectedQuantities[product._id]}
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
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-info border-primary" id={`dropdown-${product._id}`}>
                      Qty: {selectedNumbers[product._id]}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {[1, 2, 3, 4, 5, 6,].map((number) => (
                        <Dropdown.Item
                          key={number}
                          onClick={() => handleNumberChange(product._id, number)}
                        >
                          {number}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <div className="btn-group">
                  <button
                  type="button"
                  className="btn border-primary btn-outline-success"
                  onClick={() => addToCart(product)}
                  >
                  Add to <ImCart/>
                  </button>
                  </div>

                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
  
  
    
  

export default ProductList;