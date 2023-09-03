import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 
import Navbar from "./NavBar";
import {Container} from "react-bootstrap";

const Login = () => {
  const [inputs, setInputs] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { correo, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (correo !== "" && contraseña !== "") {
      const Usuario = {
        correo,
        contraseña,
      };
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:8000/login", Usuario);
        const { data } = response;
        setMensaje(data.mensaje);
        setTimeout(() => {
          setMensaje("");
          if (data?.usuario?.token) {
            localStorage.setItem("token", data.usuario.token);
            navigate(`/list`);
          }
        }, 1500);
      } catch (error) {
        console.error(error);
        setMensaje("Incorrect password");
        setTimeout(() => {
          setMensaje("");
        }, 1500);
      }
      setLoading(false);
    }
  };

  const messageClasses = mensaje ? (mensaje.includes("Incorrect ") ? "error" : "success") : "";

  return (
    <Container className="mt-1 p-2">
      <Navbar />
    <div className="container mt-5 mb-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <div className="card border-primary">
            <div className="card-body">
              <h1 className="card-title text-center">Welcome to Nomad Solutions</h1>
              <h3 className="card-subtitle mb-4 text-center">Login to your account here!</h3>
              <form onSubmit={(e) => onSubmit(e)}>
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
                <button className="btn border-primary btn-info w-100" type="submit">
                  {"Enter"}
                </button>
                <p className="mt-3 text-center">
                  Don't have an account?{" "}
                  <b onClick={() => navigate("/register")} style={{ cursor: "pointer" }} className="link text-light">
                    Register here!
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

export default Login;
