import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";

const MyCarousel = () => {
  return (
    <>
     {/* <Carousel>
        {productsArray.map((product) => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-80 "
              src={product.picture}
              alt={product.alt}
            />
          </Carousel.Item>
        ))}
        </Carousel> */}
      <div className="container">
        <Carousel showArrows={true}>
          {productsArray.map((item) => (
            <div key={item.id}>
              <img src={item.picture} alt={item.title} width={100} height={400} />
              
            </div>
          ))}
        </Carousel>
      </div> 
    
    </>
  );
};

export default MyCarousel;
