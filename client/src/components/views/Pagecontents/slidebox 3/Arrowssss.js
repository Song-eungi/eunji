import React from "react";

function Arrowssss({ prevSlide, nextSlide }) {
  return (
    <div className="arrowssss">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrowssss;