import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(''); // Agrega el estado para la URL de la imagen

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/products', {
        name: productName,
        price: productPrice,
        description: productDescription,
        image: productImage, // Agrega la URL de la imagen al objeto enviado
      }) 
      .then((res) => {
        console.log(res.data);
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setProductImage('');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Product</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Price</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Description</label>
          <textarea
            className="form-control"
            onChange={(e) => setProductDescription(e.target.value)}
            value={productDescription}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Image URL</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProductImage(e.target.value)}
            value={productImage}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default ProductForm;
