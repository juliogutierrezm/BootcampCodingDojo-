import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import Navbar from "../components/NavBar";
import carrousel1 from "../images/carrousel1.png";
import carrousel6 from "../images/carrousel6.jpg";
import carrousel5 from "../images/carrousel5.png";
import HomeCardGrid from "../components/HomeCardGrid";
import HomeCardBenefits from "../components/HomeCardBenefits";
import OtherBenefits from "../components/OtherBenefits";

const HomeCarousel = () => {
  const carouselImageStyle = {
    maxHeight: "500px", // Ajusta el alto deseado para todas las imágenes
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
              src={carrousel5}
              alt="Carrousel 1"
              style={carouselImageStyle}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carrousel6}
              alt="Carrousel 2"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
{/*               <h1>First slide label</h1>
              <p className="fs-2 ml-2">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
  </p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carrousel1}
              alt="Carrousel 3"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
{/*             <h1>First slide label</h1>
            <p className="fs-2 ml-2">
              Find out how you can rent your favorite tech, what advantages it
              has and how we use fewer resources together.
</p> */}
            </Carousel.Caption>
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
    </Container>
  );
};

export default HomeCarousel;
