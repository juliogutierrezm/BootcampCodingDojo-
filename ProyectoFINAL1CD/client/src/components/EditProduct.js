import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data.data); // Verificar la respuesta de la API
        setProduct(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:8000/api/products/${id}`, product);
      navigate('/admin'); // Redirigir a la lista de productos después de la actualización
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>
      <form onSubmit={updateProduct}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          value={product.quantity || ''}
          onChange={handleInputChange}
        />
      </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={product.description || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={product.image || ''}
          onChange={handleInputChange}
        />
      </div>
      
        <button type="submit" className="btn btn-link btn-block mt-4 mb-4  text-uppercase text-warning" name="submit" value="submit" onClick={updateProduct}>
          Update Product
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
