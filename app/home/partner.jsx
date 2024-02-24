import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
  'logo1.png',
  'logo2.png',
  'logo3.png',
  'logo4.png',
  'logo5.png',
  'logo6.png',
  'logo7.png',
  'logo8.png',
  'logo9.png',
  'logo10.png',
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // 5 seconds
};

export default function Partners(){
  return (
    <div className="slider-container">
      <h2 className="slider-heading">Our Partners</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="logo-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};


