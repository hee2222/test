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
      <img
        key={`slide${i + 1}`}
        src={`./images/slider/slide${i + 1}.jpg`}
        alt={`slide${i + 1}`}
        style={{ visibility: currentSlide === i ? 'visible' : 'hidden' }}
      />
    );
  }

  return (
    <div className="slider">
      <div onClick={handleClose} className="close">
        Close
      </div>
      {/* <p>Selected Section Key: {sectionKey}</p> */}
      <div className="slide">{renderSlides}</div>
      <button onClick={handlePrevSlide} className="prevBtn">
        <img src="./images/right.svg" alt="arrow-prev" width={40} height={40} />
      </button>
      <button onClick={handleNextSlide} className="nextBtn">
        <img src="./images/left.svg" alt="arrow-next" width={40} height={40} />
      </button>
    </div>
  );
};

export default Slider;
