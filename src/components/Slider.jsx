import React, { useState } from 'react';
import info from '../assets/info.js';

const Slide = ({ sectionKey, indexI, slideKey, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const [activeIndex1, setActiveIndex1] = useState(0);
  const tabClickHandler1 = (index) => {
    setActiveIndex1(index);
  };

  const [hoverIndex, sethoverIndex] = useState(0);
  const handleMouseOver = (index) => {
    sethoverIndex(index);
  };

  const handleMouseOut = () => {
    sethoverIndex(0);
  };
  return (
    <div className={className}>
      {indexI === 0 && (
        <div className="slide-inner">
          <h5 className="title-area">
            {`${slideKey.title}`}
            <br />
            Lv.별 특징
          </h5>
          <div className="content-area">
            <div className="tab-component">
              <ul className="tab-title">
                {info[sectionKey].slide[0].map((tab, index) => (
                  <li
                    onClick={() => tabClickHandler(index)}
                    className={activeIndex == index ? 'active' : ''}
                    key={`tab${sectionKey}-${index}`}
                  >
                    {index === 0 && 'Lv1.Essential'}
                    {index === 1 && 'Lv2.Advanced'}
                    {index === 2 && 'Lv3.Expert'}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tab-contents">
            {info[sectionKey].slide[0].map((tab, index) => (
              <Card
                activeIndex={activeIndex}
                cardIndex={index}
                sectionKey={sectionKey}
                key={`C${sectionKey}-${index}`}
              />
            ))}
          </div>
          <div className="tab-desc">
            <div className="desc-content">{info[sectionKey].desc}</div>

            <img src="/images/slider/suni1.png" alt="" />
          </div>
        </div>
      )}
      {indexI === 1 && (
        <div className="slide-inner">
          <h5 className="title-area">
            {`${slideKey.title}`}
            <br />
            학습 Roadmap
          </h5>
          <div className="content-area">
            <img src="/images/slider/suni2.png" alt="" />
            <div className="scroll-contents">
              {info[sectionKey].slide[1].map((list, index) => (
                <div className="scroll-card" key={`S${sectionKey}-${index}`}>
                  <h6>{list[0]}</h6>
                  <div>
                    {list.map((ul, ulId) =>
                      ulId == 0 ? (
                        ''
                      ) : (
                        <ul key={`li${sectionKey}-${ulId}`}>
                          {ul.map((li, i) =>
                            i === 0 ? (
                              <div
                                className="list-title"
                                key={`li${sectionKey}-${ulId}-${index}`}
                              >
                                {li}
                              </div>
                            ) : index === 0 ? (
                              <li
                                key={`li${sectionKey}-${ulId}-${index}-${i}`}
                                onMouseOver={() => handleMouseOver(li[2])}
                                onMouseOut={handleMouseOut}
                              >
                                <a href={li[1]} target="_blank">
                                  {li[0]}
                                </a>
                              </li>
                            ) : (
                              <li
                                key={`li${sectionKey}-${ulId}-${index}-${i}`}
                                className={
                                  Array.isArray(li[2]) &&
                                  li[2].includes(hoverIndex)
                                    ? 'active'
                                    : ''
                                }
                              >
                                {' '}
                                <a href={li[1]} target="_blank">
                                  {li[0]}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {indexI === 2 && (
        <div className="slide-inner">
          <h5 className="title-area">
            {`${slideKey.title}`}
            <br />
            인증에 도전하세요!
          </h5>
          <div className="content-area">
            <div className="table-component">
              <ul className="tab-title">
                {info[sectionKey].slide[2].map((tab, index) => (
                  <li
                    onClick={() => tabClickHandler1(index)}
                    className={activeIndex1 == index ? 'active' : ''}
                    key={`level${sectionKey}-${index}`}
                  >
                    Level {index + 1}
                  </li>
                ))}
              </ul>
              <div className="tab-contents">
                <div className="table-header">
                  <span>인증명</span>
                  <span>인증 내용</span>
                  <span>추천학습</span>
                  <span>인증 방식</span>
                </div>
                {info[sectionKey].slide[2].map((wrap, i) => (
                  <div
                    className={`level ${activeIndex1 == i ? 'active' : ''}`}
                    key={`wrap${sectionKey}-${i}`}
                  >
                    <div className="table-content">
                      {wrap[1].map((table, index) => (
                        <div key={`table${sectionKey}-${i}-${index}`}>
                          <span className="course-title">{table[0]}</span>
                          <div className="course-desc">{table[1]}</div>
                          <ul>
                            {table[2].map((li, liIndex) => (
                              <li
                                key={`table${sectionKey}-${i}-${index}-${liIndex}`}
                              >
                                <a href={li[1]} target="_blank">
                                  {li[0]}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="last-cell">
                      <ul>
                        {wrap[0].map((info, infoIndex) => (
                          <li key={`tabInfo${sectionKey}-${i}-${infoIndex}`}>
                            {info}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Slider = ({ sectionKey, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  document.documentElement.style.setProperty(
    '--planet',
    info[sectionKey].color[1]
  );
  document.documentElement.style.setProperty(
    '--planet-bg',
    info[sectionKey].color[0]
  );
  document.documentElement.style.setProperty(
    '--planet-op',
    info[sectionKey].color[2]
  );
  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      onClose();
    }, 800);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const renderObject = info[sectionKey];

  // 슬라이드 전체 개수 계산
  let totalSlides = renderObject['slide'].length;

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

  let renderSlides = [];
  let slideIndex = [];

  var k = 0;
  for (let i = 0; i < renderObject['slide'].length; i++) {
    renderSlides.push(
      <Slide
        key={`slide${sectionKey}-${i}-${i}`}
        slideTemplate={i}
        slideKey={renderObject}
        sectionKey={sectionKey}
        indexI={i}
        className={`slide slide${i} ${
          currentSlide === k ? 'visible' : 'hidden'
        }`}
      />
    );
    slideIndex.push(
      <div
        key={`dot${sectionKey}-${i}-${i}`}
        className={`slideDot ${currentSlide === k ? 'active' : ''}`}
      ></div>
    );
    k++;
  }

  return (
    <div
      className={`slider-container slider${sectionKey} ${
        isOpen ? 'open' : 'close'
      }`}
    >
      <div onClick={handleClose} className="close-btn">
        <img src="./images/slider/close.svg" alt="close-btn" />
      </div>
      <div className="slider">{renderSlides}</div>

      <div className="button-wrap">
        <button onClick={handlePrevSlide} className="prevBtn">
          <img src="./images/slider/arrow.svg" alt="arrow-prev" />
        </button>

        <button onClick={handleNextSlide} className="nextBtn">
          <img src="./images/slider/arrow.svg" alt="arrow-next" />
        </button>
      </div>

      <div className="slideIndex">{slideIndex}</div>
    </div>
  );
};

export const Card = ({ sectionKey, cardIndex, activeIndex }) => {
  return (
    <div className={`card ${activeIndex === cardIndex ? 'active' : ''}`}>
      <div>
        <h6>주요특징</h6>
        <ul>
          {info[sectionKey].slide[0][cardIndex][0].map((list, index) => (
            <li key={`a${sectionKey}-${index}`}>{list}</li>
          ))}
        </ul>
      </div>
      <div>
        <h6>학습대상</h6>
        <ul>
          {info[sectionKey].slide[0][cardIndex][1].map((list, index) => (
            <li key={`b${sectionKey}-${index}`}>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
