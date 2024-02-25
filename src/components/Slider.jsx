import React, { useState, useEffect, useRef } from 'react';
import info from '../assets/info.js';
import { Card } from './Card';
import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
import { Roadmap } from './Roadmap';
import { gsap } from 'gsap'; //

const subtitle = [
  '특징 · 활용',
  '추천 대상',
  '인증 방안',
  '인증 기준',
  '(인증) 관련 학습 과정',
];
const Slide = ({
  sectionKey,
  indexI,
  indexJ,
  slideKey,
  slideContent,
  className,
}) => {
  return (
    <>
      {sectionKey === 0 && (
        <div className="slide slide1">
          <Slide1 />
        </div>
      )}
      {sectionKey === 1 && (
        <div className="slide slide2">
          <Slide2 />
        </div>
      )}
      {sectionKey !== 0 && sectionKey !== 1 && (
        <>
          {indexI === 0 && (
            <div
              className={`${className} ${indexJ !== 0 ? 'content-slide' : ''}`}
            >
              {indexJ === 0 && (
                <>
                  <div className="title-area title-0">
                    <h1 className="main-title">{slideKey.title}</h1>
                    <p className="main-sub-title">{`${slideKey.title} 직무의 Lv.별 특징`}</p>
                  </div>
                </>
              )}
              {indexJ !== 0 && (
                <>
                  <div className="title-area">
                    <p className="page-sub-title">{`${slideKey.title} 직무의 Lv.별 특징`}</p>
                    <h1 className="page-main-title">고려사항</h1>
                  </div>
                  <div className="page-card-wrap">
                    {slideContent.map((cardContent, index) => (
                      <Card
                        cardContent={cardContent}
                        index={index}
                        indexI={indexI}
                        key={`card${indexI}-${indexJ}-${index}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {indexI === 1 && (
            <div className={className}>
              {indexJ === 0 && (
                <div className="title-area title-1">
                  <h3 className="main-title">{`${slideKey.title} 학습`}</h3>
                  <h3>ROADMAP</h3>
                </div>
              )}
              {indexJ !== 0 && (
                <>
                  <Roadmap />
                </>
              )}
            </div>
          )}
          {indexI === 2 && (
            <div className={className}>
              {indexJ === 0 && (
                <div className="title-area title-2">
                  <h3 className="main-title">{`${slideKey.title} 직무 상세 인증방안`}</h3>
                </div>
              )}
              {indexJ !== 0 && (
                <>
                  <div className="title-area">
                    <p className="page-sub-title">{`${slideKey.title} 직무 상세 인증방안`}</p>
                    <h3 className="page-main-title">{subtitle[indexJ - 1]}</h3>
                  </div>
                  <div className="page-card-wrap">
                    {slideContent.map((cardContent, index) => (
                      <Card
                        cardContent={cardContent} // 올바른 prop 이름인 cardContent로 수정
                        index={index}
                        indexI={indexI}
                        key={`card${indexI}-${indexJ}-${index}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          {indexI === 3 && (
            <div className={className}>
              {indexJ === 0 && (
                <div className="title-area title-3">
                  <h3 className="main-title">{slideKey.title}</h3>
                  <h3>
                    학습 인증 <span>1단계</span>
                  </h3>
                </div>
              )}
              {indexJ !== 0 && (
                <>
                  <div className="title-area">
                    <p className="page-sub-title">{`${slideKey.title} 학습인증`}</p>
                    <h1 className="page-main-title">1단계</h1>
                  </div>
                  <div className="page-card-wrap content-3">
                    {slideContent.map((cardContent, index) => (
                      <Card
                        indexI={indexI}
                        cardContent={cardContent} // 올바른 prop 이름인 cardContent로 수정
                        index={index}
                        key={`card${indexI}-${indexJ}-${index}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          {indexI === 4 && (
            <div className={className}>
              {indexJ === 0 && (
                <div className="title-area title-4">
                  <h3 className="main-title">초보자를 위한</h3>
                  <h3>기초직무 역량 Skill 인증 1단계</h3>
                </div>
              )}
              {indexJ !== 0 && (
                <>
                  <div className="title-area">
                    <img
                      src={`/images/img${sectionKey}${indexI}.png`}
                      alt="image"
                    />
                  </div>
                </>
              )}
            </div>
          )}
          {indexI === 5 && (
            <div className={className}>
              {indexJ === 0 && (
                <div className="title-area title-3">
                  <h3 className="main-title">{slideKey.title}</h3>
                  <h3>
                    학습 인증 <span>2단계</span>
                  </h3>
                </div>
              )}
              {indexJ !== 0 && (
                <>
                  <div className="title-area">
                    <p className="page-sub-title">{`${slideKey.title} 학습인증`}</p>
                    <h1 className="page-main-title">2단계</h1>
                  </div>
                  <div className="page-card-wrap content-3">
                    {slideContent.map((cardContent, index) => (
                      <Card
                        indexI={indexI}
                        cardContent={cardContent} // 올바른 prop 이름인 cardContent로 수정
                        index={index}
                        key={`card${indexI}-${indexJ}-${index}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          {indexI === 6 && (
            <div className={className}>
              {indexJ === 0 && (
                <>
                  <div className="title-area title-4">
                    <h3 className="main-title">실무자를 위한</h3>
                    <h3>미래역량 관점 Skill 인증 2단계</h3>
                  </div>
                </>
              )}
              {indexJ !== 0 && (
                <>
                  <img
                    src={`/images/img${sectionKey}${indexI}.png`}
                    alt="image"
                  />
                </>
              )}
            </div>
          )}
          {indexI === 7 && (
            <div className={className}>
              {indexJ === 0 && (
                <div className="title-area title-3">
                  <h3 className="main-title">{slideKey.title}</h3>
                  <h3>
                    학습 인증 <span>3단계</span>
                  </h3>
                </div>
              )}
              {indexJ !== 0 && (
                <>
                  <div className="title-area">
                    <p className="page-sub-title">{`${slideKey.title} 학습인증`}</p>
                    <h1 className="page-main-title">3단계</h1>
                  </div>
                  <div className="page-card-wrap content-3">
                    {slideContent.map((cardContent, index) => (
                      <Card
                        indexI={indexI}
                        cardContent={cardContent} // 올바른 prop 이름인 cardContent로 수정
                        index={index}
                        key={`card${indexI}-${indexJ}-${index}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          {indexI === 8 && (
            <div className={className}>
              {indexJ === 0 && (
                <>
                  <div className="title-area title-4">
                    <h3 className="main-title">그룹 Expert 검증을 위한</h3>
                    <h3>직무전문역량 Skill 인증 3단계</h3>
                  </div>
                </>
              )}
              {indexJ !== 0 && (
                <>
                  <img
                    src={`/images/img${sectionKey}${indexI}.png`}
                    alt="image"
                  />
                </>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export const Slider = ({ sectionKey, onClose }) => {
  const handleClose = () => {
    onClose();
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
      console.log(slideContent);

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
    <div className="slider-container">
      <div onClick={handleClose} className="close">
        Close
      </div>
      <div className="slider">{renderSlides}</div>
      {sectionKey !== 0 && sectionKey !== 1 && (
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
      )}
      {sectionKey !== 0 && sectionKey !== 1 && (
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
      )}
    </div>
  );
};
