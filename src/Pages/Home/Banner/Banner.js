import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption style={{ marginBottom: '' }}>
          <h1 className='mb-4' style={{ 'fontSize': '6vw' }}>WE’RE YOUR PLUMBER</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className='mb-4' style={{ 'fontSize': '6vw' }}>WE ARE AVAILABLE FOR
PLUMBING SERVICES</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='mb-4' style={{ 'fontSize': '6vw' }}>Capture Your Enjoyable Moment With Me</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;