import React from "react";

function Arrowsss({ prevSlide, nextSlide }) {
  return (
    <div className="arrowsss">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrowsss;