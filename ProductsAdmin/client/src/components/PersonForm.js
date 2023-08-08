import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const ProductManager = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/products', {
        name: productName,
        price: productPrice,
        description: productDescription,
      })
      .then((res) => {
        console.log(res.data); // Puedes manejar la respuesta como sea necesario
        // Reiniciar los estados de los campos
        setProductName('');
        setProductPrice('');
        setProductDescription('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Manager</h2>
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
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default ProductManager;
