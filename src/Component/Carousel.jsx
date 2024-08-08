import React from 'react';
import { Carousel } from 'react-bootstrap';
import Jets from '../images/ImageOne.jpg';
import Jet2 from '../images/ImageTwo.jpg';
import Jet3 from '../images/Jet3.jpg';
import Helicopter from '../images/Helicopter.jpg';
import Aeroplane from '../images/ImageThree.jpg';

const ImageCarousel = () => {
  const images = [Jets, Jet2, Jet3, Helicopter, Aeroplane];

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            style={{height: '80vh'}}
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
