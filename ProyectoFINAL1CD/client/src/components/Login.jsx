import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
          localStorage.setItem("token", data?.usuario.token);
          navigate(`/list`);
        }, 1500);
      } catch (error) {
        console.error(error);
        setMensaje("Correo u contraseña incorrecta");
        setTimeout(() => {
          setMensaje("");
        }, 1500);
      }
      setInputs({ correo: "", contraseña: "" });
      setLoading(false);
    }
  };

  return (
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
                  {loading ? "Cargando..." : "Enter"}
                </button>
                <p className="mt-3 text-center">
                  Don't have an account?{" "}
                  <b onClick={() => navigate("/register")} style={{ cursor: "pointer" }} className="link text-light">
                    Register here!
                  </b>
                </p>
              </form>
              {mensaje && <div className="alert alert-success mt-3">{mensaje}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
