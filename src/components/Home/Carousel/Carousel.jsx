import React, { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import Image1 from '../../../assets/images/carousel/Carousel1.jpg'
import Image2 from '../../../assets/images/carousel/Carousel2.jpg'
import Image3 from '../../../assets/images/carousel/Carousel3.jpg'
import Image4 from '../../../assets/images/carousel/Carousel4.jpg'
// 1930 x 830

export default function Carouselas() {

  const [images, setImages] = useState(null);



  return (
    <>
      <Carousel>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Image1}
            alt="Image1"
          />
          <Carousel.Caption>
            <h3>Compras seguras en linea</h3>
            <p>Vive una experiencia única.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Devolucion y Reembolso</h3>
            <p>Encuentra el producto ideal.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Rastrea tu producto</h3>
            <p>Rompe tus barreras.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Image4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Compra Facil</h3>
            <p>Disfruta de un buena compania.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
}
