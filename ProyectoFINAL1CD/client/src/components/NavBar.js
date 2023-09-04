import React from "react";
import { Container } from "react-bootstrap";
import { ImCart } from "react-icons/im";

const Navbar = () => {
  return (
    <Container>
      <nav className=" border-primary navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            Nomad Solutions
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/list">
                  Explore
                </a>
              </li>
            </ul>
            <div className="d-flex navbar-nav m-2 ">
              <a className=" nav-link bg-primary m-2 " href="/login">
                Login
              </a>
              <a className="nav-link bg-primary m-2" href="/register">
                Register
              </a>
            
            </div>
            <div className=" d-flex  ">
            <a className="nav-link btn btn-outline-info  " href="/cart">
              <ImCart />
            </a>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
