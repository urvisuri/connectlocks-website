import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    "/assets/home/slider-new-1.png",
    "/assets/home/slider-new-2.png",
    "/assets/home/brass-series.png",
    "/assets/home/smooth-unlock.png"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
