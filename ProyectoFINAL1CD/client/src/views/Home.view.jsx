import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Navbar from '../components/NavBar';
import carrousel1 from '../images/carrousel1.png';
import carrousel2 from '../images/carrousel2.png';
import carrousel3 from '../images/carrousel3.png'; 


const HomeCarousel = () => {
  const carouselImageStyle = {
    maxHeight: '500px', // Ajusta el alto deseado para todas las imágenes
    objectFit: 'cover',
      // Cambia el ajuste del contenido de la imagen a 'contain'
  };

  return (
    <Container className="mt-1 p-2">
      <Navbar />
      <div className="container-md mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 mb-2 img-fluid"
              src={carrousel1} alt="Carrousel 1"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h1 >First slide label</h1>
              <p className="fs-2 ml-2">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carrousel2} alt="Carrousel 2"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h1 >First slide label</h1>
              <p className="fs-2 ml-2">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carrousel3} alt="Carrousel 3"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h1 >First slide label</h1>
              <p className="fs-2 ml-2">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        </Container>
      );
    };
    

export default HomeCarousel;
