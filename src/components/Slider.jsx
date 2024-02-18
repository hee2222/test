import React, { useState } from 'react';

export const Slider = ({ sectionKey, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const renderSlides = [];
  for (let i = 0; i < 3; i++) {
    renderSlides.push(
      <div
        key={`slide${i + 1}`}
        style={{ visibility: currentSlide === i ? 'visible' : 'hidden' }}
      >
        <img src={`./images/slider/slide${i + 1}.png`} alt={`slide${i + 1}`} />
      </div>
    );
  }

  return (
    <div className="slider">
      <div onClick={handleClose} className="close">
        Close
      </div>
      {/* <p>Selected Section Key: {sectionKey}</p> */}
      {renderSlides}
      <button onClick={handlePrevSlide} className="prevBtn">
        Prev
      </button>
      <button onClick={handleNextSlide} className="nextBtn">
        Next
      </button>
    </div>
  );
};

export default Slider;
