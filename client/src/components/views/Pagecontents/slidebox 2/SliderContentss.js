import React from "react";
import {Link} from "react-router-dom";

function SliderContentss({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-imagess" src={slide.urls} alt="" />
          <h2 className="slide-titless">{slide.title}</h2>
          <h3 className="slide-textss">{slide.description}</h3>
          <br>
          </br>
          <br></br>
          <div class="wrap">
          <Link to ="/bmical">
          <button className="slide-buttonss">계산해보기</button>
          </Link>
          </div>
          
        </div>
        
      ))}
      
    </section>
  );
}

export default SliderContentss;