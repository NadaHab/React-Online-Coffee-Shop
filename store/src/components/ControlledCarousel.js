import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.9bddfa0bd1b5ae93da13be438dc3b74c?rik=%2b9%2bpAIELThODuw&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cappucino</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://express-images.franklymedia.com/6616/sites/392/2020/11/30140335/Hot-Chocolate.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Hot Chocolate</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.KE2RNjz7jpDG3a98JNlGpQHaE8?pid=ImgDet&rs=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Flavoured Caffe Latte</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.PblgXGvvBs5QTNNsZtokOwHaFK?pid=ImgDet&rs=1"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Refreshing, Calming, Camomile</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel ;