import React from "react";
import {Link} from "react-router-dom";

function SliderContentsss({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-imagesss" src={slide.urls} alt="" />
          <h2 className="slide-titlesss">{slide.title}</h2>
          <h3 className="slide-textsss">{slide.description}</h3>
          <br>
          </br>
          <br></br>
          <div class="wrap">
          <Link to ="/goodfood">
          <button className="slide-buttonss">시작하기</button>
          </Link>
          </div>
          
        </div>
        
      ))}
      
    </section>
  );
}

export default SliderContentsss;