import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import Navbar from "../components/NavBar";
import carrousel4 from "../images/carrousel4.jpg";
import carrousel6 from "../images/carrousel6.png";
import carrousel5 from "../images/carrousel5.png";
import HomeCardGrid from "../components/HomeCardGrid";
import HomeCardBenefits from "../components/HomeCardBenefits";
import OtherBenefits from "../components/OtherBenefits";
import Footer from "../components/HomeFooter";

const HomeCarousel = () => {
  const carouselImageStyle = {
    maxHeight: "450px", // Ajusta el alto deseado para todas las imágenes
    objectFit: "cover",
    // Cambia el ajuste del contenido de la imagen a 'contain'
  };

  return (
    <Container className="mt-1 p-2">
      <Navbar />
      <div className="container-md mt-4">
        <h1 className="card-header   text-center">
          Welcome to Nomad Solutions
        </h1>
        <hr />

        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 mb-2 img-fluid"
            src={carrousel4}
            alt="Carrousel 3"
            style={carouselImageStyle}
          />
          <Carousel.Caption>
          <h2 className=" ml-2 text-light">
          Simplifying Your Digital World, Wherever You Are.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mb-2 img-fluid "
            src={carrousel6}
            alt="Carrousel 3"
            style={carouselImageStyle}
          />
          <Carousel.Caption>
            <h2 className=" ml-2 text-light">
            Freedom to work, equipped anytime.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mb-2 img-fluid"
              src={carrousel5}
              alt="Carrousel 1"
              style={carouselImageStyle}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className=" mt-4 ">
        <HomeCardGrid />
      </div>
      <div className=" mt-4 ">
        {" "}
        <HomeCardBenefits />
      </div>
      <div className=" mt-4 ">
        <OtherBenefits />
      </div>
      <div className=" mt-4 ">
        <Footer />
      </div>
    </Container>
  );
};

export default HomeCarousel;
