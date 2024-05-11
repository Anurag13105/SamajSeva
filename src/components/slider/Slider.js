import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './Slider.css'; // Your custom styles

function ResponsiveSlider() {
  return (
    <div className="slider-container">
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div>
          <img src="./Vector (4).png" alt="Slide 1" />
        </div>
        {/* More slide items */}
        <div>
          <img src="./Rectangle 10.png" alt="Slide 2" />
        </div>
      </Carousel>
    </div>
  );
}

export default ResponsiveSlider;
