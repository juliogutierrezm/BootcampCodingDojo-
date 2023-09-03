import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import Navbar from "./NavBar";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

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

  console.log(product); // Verificar el contenido de product

  return (
    <Container className="mt-1 p-2">
      <Navbar />

      <Row className=" mt-4 p-2">
        <Col md={6}>
          <Card className="border-primary" style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              style={{ maxWidth: "300px" }}
              className="mx-auto text-center"
            />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="border-primary" style={{ width: "100%" }}>
            <Card.Body>
              <ListGroup className="list-group-flush ">
                <ListGroup.Item>{product.description}</ListGroup.Item>
                <ListGroup.Item>Monthly Rent : ${product.price}</ListGroup.Item>
                <a href="/list" className="btn btn-link border-primary mt-3">
                Back to List
              </a>{" "}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default ProductDetails;
