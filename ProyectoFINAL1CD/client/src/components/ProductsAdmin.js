import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Modal, Button } from "react-bootstrap";
import Navbar from "./NavBar";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]); // Nuevo estado para los productos filtrados
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data.data);
        setFilteredProducts(res.data.data); // Establecer los productos filtrados inicialmente como todos los productos
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProduct = async () => {
    if (productToDelete) {
      try {
        await axios.delete(`http://localhost:8000/api/products/${productToDelete}`);
        const updatedProducts = products.filter(
          (product) => product._id !== productToDelete
        );
        setProducts(updatedProducts);
        // Actualizar también filteredProducts
        setFilteredProducts(updatedProducts);
        handleCloseConfirmation();
      } catch (error) {
        console.log(error);
      }
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
    <div className="container mt-4">
      <h2 className="mb-2">Products Admin</h2>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-link text-info"
          onClick={() => navigate("/form")}
        >
          Create New Product
        </button>
      </div>
      <div>
        <select
        className="form-select bg-dark text-white border-primary"
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
      <div className="d-flex">
        <h6 className="p-1"> Products available in stock: </h6>
        <h6 className="text-success p-1"> ({filteredProducts.length})</h6>
      </div>
      <table className="table table-hover border-primary">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Units</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ maxHeight: "70px" }}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
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
    </div>
    <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
    <Modal.Header closeButton>
      <Modal.Title>Confirm Deletion</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseConfirmation}>
        Cancel
      </Button>
      <Button
        variant="danger"
        onClick={() => deleteProduct(productToDelete)}
      >
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
  </Container>
);

};

export default ProductsAdmin;
