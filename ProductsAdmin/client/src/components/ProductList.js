import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products')
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product List</h2>
      <Link to="/form" className="btn btn-primary mb-4">
        Add New Product
      </Link>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product._id} className="list-group-item">
            <h3>{product.name}</h3>
            <Link to={`/product/${product._id}`} className="btn btn-primary">
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

