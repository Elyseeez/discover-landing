import React from 'react';
import Image from '../../assets/slideimg.jpg';
import Imagetwo from '../../assets/slideimgtwo2.jpg';
import Imagethree from '../../assets/slideimgthree3.jpg';
import Carousel from 'react-bootstrap/Carousel';



function  CarouselAbout ()  { 
  
  return (

  <Carousel>
  <Carousel.Item interval={8000}>
    <img
      className="d-block w-100"
      src={Image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Bromo</h3>
      <p>Steady your steps, we will climb together!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={Imagetwo}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Bromo</h3>
      <p>Steady your steps, we will climb together!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Imagethree}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Bromo</h3>
      <p>Steady your steps, we will climb together!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}
export default CarouselAbout;