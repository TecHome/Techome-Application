import React from "react";
import { Carousel } from 'react-bootstrap';
import Image1 from '../../../assets/images/carousel/Carousel1.jpg';
import Image2 from '../../../assets/images/carousel/Carousel2.jpg';
import Image3 from '../../../assets/images/carousel/Carousel3.jpg';
import Image4 from '../../../assets/images/carousel/Carousel4.jpg';
// 1930 x 830

export default function Banner() {

  const banner = [
    {
      id: 1,
      src: Image1,
      description: 'Compras seguras en linea',
      content: 'Vive una experiencia única.',
      alt: 'Banner 1'
    },
    {
      id: 2,
      src: Image2,
      description: 'Devolucion y Reembolso',
      content: 'Encuentra el producto ideal.',
      alt: 'Banner 2'
    },
    {
      id: 3,
      src: Image3,
      description: 'Rastrea tu producto',
      content: 'Rompe tus barreras.',
      alt: 'Banner 3'
    },
    {
      id: 4,
      src: Image4,
      description: 'Compra Facil',
      content: 'Disfruta de un buena compañia.',
      alt: 'Banner 4'
    }
  ];

  return (
    <>
      <Carousel>
        {banner.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.alt}
            />
            <Carousel.Caption>
              <h3>{item.description}</h3>
              <p>{item.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
