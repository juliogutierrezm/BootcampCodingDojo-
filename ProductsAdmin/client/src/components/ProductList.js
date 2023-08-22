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

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${productId}`);
      // Actualizar la lista de productos después de la eliminación
      const updatedProducts = products.filter(product => product._id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div>
              <Link to={`/product/${product._id}`} className="btn btn-primary mr-2">
                Details
              </Link>
              <Link to={`/edit/${product._id}`} className="btn btn-warning mr-2">
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
