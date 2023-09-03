import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

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
      handleCloseConfirmation();
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowConfirmation = (productId) => {
    setProductToDelete(productId);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setProductToDelete(null);
    setShowConfirmation(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-2">Products Admin</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-link text-info" onClick={() => navigate("/form")}>
          Create New Product
        </button>
      </div>
      <div className="d-flex">
        <h6 className=" p-1"> Products available in stock: </h6>
        <h6 className=" text-success p-1">  ({products.length})</h6>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Units</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ maxHeight: '80px' }}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
              <td>
                <Link
                  to={`/edit/${product._id}`}
                  className="btn btn-link text-warning"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-link text-danger"
                  onClick={() => handleShowConfirmation(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this product?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteProduct(productToDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductsAdmin;
