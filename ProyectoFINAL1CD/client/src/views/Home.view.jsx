import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

const HomeCarousel = () => {
    const carouselImageStyle = {
        width: '500px', // Ajusta el ancho deseado para todas las imágenes
        height: '500px', // Ajusta el alto deseado para todas las imágenes
        objectFit: 'cover', // Ajusta el ajuste del contenido de la imagen
      };
    return (
        <div className='container-md'> 
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://global-uploads.webflow.com/6113e810d1c42ac2b4574995/61e14faa7b2459b3e7d0035c_tech%20setup%20remote%20developers.png" // URL de tu primera imagen en línea
              alt="First slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i0.wp.com/yaesnoticia.mx/wp-content/uploads/2023/06/62b31f7cc3f4d.jpeg?resize=696%2C348&ssl=1" // URL de tu segunda imagen en línea
              alt="Second slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.creativbstudios.com/wp-content/uploads/2022/05/c24d31646667647ff56377a45cc0b3d0-e1653906598334.jpg" // URL de tu tercera imagen en línea
              alt="Third slide"
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );
    };
    

export default HomeCarousel;
