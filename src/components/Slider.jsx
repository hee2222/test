import React, { useState } from 'react';
import info from '../assets/info.js';

const Slide = ({ sectionKey, indexI, indexJ, slideKey, className }) => {
  return (
    <>
      {indexI === 0 && (
        <div className={`${className} ${indexJ !== 0 ? 'content-slide' : ''}`}>
          {indexJ === 0 && (
            <>
              <div className="title-area title-0">
                <h1 className="main-title">{sectionKey + 1}</h1>
                <p className="main-sub-title">{`${slideKey.title}`}</p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export const Slider = ({ sectionKey, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const renderObject = info[sectionKey];

  // 슬라이드 전체 개수 계산
  let totalSlides = 0;
  for (let i = 0; i < renderObject['slide'].length; i++) {
    totalSlides += renderObject['slide'][i].length;
  }

  // 이전 슬라이드로 이동하는 함수
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  // 다음 슬라이드로 이동하는 함수
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  let slideContent;
  let renderSlides = [];

  var k = 0;
  for (let i = 0; i < renderObject['slide'].length; i++) {
    for (let j = 0; j < renderObject['slide'][i].length; j++) {
      slideContent = renderObject['slide'][i][j];

      renderSlides.push(
        <Slide
          key={`${sectionKey}-${i}-${j}`}
          slideTemplate={i}
          slideKey={renderObject}
          sectionKey={sectionKey}
          slideContent={slideContent}
          indexI={i}
          indexJ={j}
          className={`slide slide${sectionKey}-${i}-${j} ${
            currentSlide === k ? 'visible' : 'hidden'
          }`}
        />
      );
      k++;
    }
  }

  return (
    <div className={`slider-container ${isOpen ? 'open' : 'close'}`}>
      <div onClick={handleClose} className="close">
        Close
      </div>
      <div className="slider">{renderSlides}</div>

      <>
        <button onClick={handleNextSlide} className="prevBtn">
          <img
            src="./images/right.svg"
            alt="arrow-prev"
            width={40}
            height={40}
          />
        </button>
      </>

      <>
        <button onClick={handlePrevSlide} className="nextBtn">
          <img
            src="./images/left.svg"
            alt="arrow-next"
            width={40}
            height={40}
          />
        </button>
      </>
    </div>
  );
};
