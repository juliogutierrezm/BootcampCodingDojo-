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
  const [productQuantity, setProductQuantity] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/products', {
        name: productName,
        price: productPrice,
        description: productDescription,
        image: productImage, 
        quantity: productQuantity,
      }) 
      .then((res) => {
        console.log(res.data);
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setProductImage('');
        setProductQuantity('');
        navigate('/admin');
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
          type="number" // Cambia el tipo de entrada a "number"
          className="form-control"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Product Quantity</label>
        <input
          type="number" // Cambia el tipo de entrada a "number"
          className="form-control" // Utiliza "form-control" para aplicar estilos de Bootstrap
          onChange={(e) => setProductQuantity(e.target.value)}
          value={productQuantity}
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
            <div className='d-flex justify-content-between'>       <button type="submit" className="btn btn-link btn-block mt-4 mb-4  text-uppercase text-success">Create</button>
            <br />
            <a href="/admin" className="btn btn-link btn-block mt-4 mb-4">
            Back to Products
            </a>{" "}</div>
      
            </form>
            </div>
            );
          };

export default ProductForm;
