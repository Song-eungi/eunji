import React from "react";
import {Link} from "react-router-dom";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-images" src={slide.urls} alt="" />
          <h2 className="slide-titles">{slide.title}</h2>
          <h3 className="slide-texts">{slide.description}</h3>
          <br>
          </br>
          <br></br>
          
          <div class="wrap">
          <Link to ="/nutrients">
          <button className="slide-buttons">추천 받기</button>
          </Link>
          </div>
          
        </div>
        
      ))}
      
    </section>
  );
}

export default SliderContent;