import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContents";
import Dots from "./Dotss";
import Arrows from "./Arrowss";
import sliderImage from "./SliderImages";
import "./Sliders.css";

const len = sliderImage.length - 1;

function Sliders(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      
     
    </div>
  );
}

export default Sliders;