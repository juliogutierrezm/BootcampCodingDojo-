import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 
import Navbar from "./NavBar";
import { Card, ListGroup, Button, Container, Row, Col } from "react-bootstrap";

const Register = () => {
  const [inputs, setInputs] = useState({
    correo: "",
    nombre: "",
    contraseña: "",
  });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { nombre, contraseña, correo } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (nombre !== "" && contraseña !== "" && correo !== "") {
      const Usuario = {
        nombre,
        correo,
        contraseña,
      };
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:8000/register", Usuario);
        const { data } = response;
        setMensaje(data.mensaje);
        setInputs({ nombre: "", contraseña: "", correo: "" });
        setTimeout(() => {
          setMensaje("");
          navigate("/login");
        }, 1500);
      } catch (error) {
        console.error(error);
        setMensaje("Hubo un error");
        setTimeout(() => {
          setMensaje("");
        }, 1500);
      }

      setLoading(false);
    }
  };
  const messageClasses = mensaje ? (mensaje.includes("email") ? "error" : "success") : "";

  return (
    <Container className="mt-1 p-2">
      <Navbar />
    <div className="container mt-5 mb-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-primary">
            <div className="card-body">
              <h1 className="card-title text-center mb-3">Welcome to Nomad Solutions</h1>
              <h2 className="card-subtitle mb-1 text-center">Register your account</h2>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Name</label>
                  <input
                    className="form-control"
                    onChange={(e) => HandleChange(e)}
                    value={nombre}
                    name="nombre"
                    id="nombre"
                    type="text"
                    placeholder="Name..."
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">E-mail</label>
                  <input
                    className="form-control"
                    onChange={(e) => HandleChange(e)}
                    value={correo}
                    name="correo"
                    id="correo"
                    type="email"
                    placeholder="Correo..."
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contraseña" className="form-label">Password</label>
                  <input
                    className="form-control"
                    onChange={(e) => HandleChange(e)}
                    value={contraseña}
                    name="contraseña"
                    id="contraseña"
                    type="password"
                    placeholder="Contraseña..."
                    autoComplete="off"
                  />
                </div>
                <button className="btn border-primary btn-warning w-100" type="submit">
                  {loading ? "Cargando..." : "Register"}
                </button>
                <p className="mt-3 text-center">
                  Do you already have an account?{" "}
                  <b onClick={() => navigate("/login")} style={{ cursor: "pointer" }} className="link text-light">
                    Login here!
                  </b>
                </p>
              </form>
              <div className={messageClasses}>{mensaje}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </Container>
  );
};

export default Register;
