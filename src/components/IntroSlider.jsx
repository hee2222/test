import React, { useState, useEffect } from 'react';
import { usePlay } from '../contexts/Play';
import info from '../assets/info.js';
import { Carousel1 } from './Carousel';
import SVGComponent1 from './SVGComponent1';
import SVGComponent2 from './SVGComponent2';
import SVGComponent3 from './SVGComponent3';
import Py from './py';

const IntroSlide = ({ indexI, className }) => {
  const { setPlay, setOpen, innerOpen } = usePlay();

  const [clickedPlanet, setClickedPlanet] = useState(0);

  const handlePlanetClick = (planet) => {
    setClickedPlanet(planet);
  };

  const [hoverIndex, setHoverIndex] = useState(0);

  // 하위 컴포넌트로 전달할 콜백 함수
  const handleMouseOverParent = (index) => {
    setHoverIndex(index);
  };

  const handleMouseOutParent = () => {
    setHoverIndex(0);
  };

  const intro4Title = [
    '초보자를 위한 기초직무 역량 skill 인증',
    '실무자를 위한 미래역량 관점 skill 인증',
    '그룹 Expert 검증을 위한 직무전문역량 skill 인증',
  ];
  const intro2Title = [
    [
      '직무 기초 개념 및 방법론 / Process / Framework 등에 대한 Knowledge 이해 수준 평가',
      ['직무 경력 3년차 미만 역량 개발', '직무 이동/인력 배치 시 최소 요건화'],
      [1, 2],
      [1, 3],
    ],
    [
      '미래 역량의 실무 적용\n관점에서 현업 적용\n방법, Issue/문제\n해결력\n중심 평가',
      ['직무 전문성/미래 대응력 검증', '평가/이동/배치 등 활용'],
      [1, 2, 3],
      [1, 3],
    ],
    [
      'Specialist로서 갖춰야 할\n통합적 전문성과\n전략적 시각 기반 Pjt.통한\n문제 해결 수준 및 성과 평가',
      ['그룹 수준의 Talent 인증', 'SKOUGHT\n인재 Pool in'],
      [2, 4],
      [2, 3],
    ],
  ];
  const [intro4tab, setIntro4tab] = useState(0);
  const [intro2tab, setIntro2tab] = useState(0);

  const tab4Change = (index) => {
    setIntro4tab(index);
  };

  const tab2Change = (index) => {
    setIntro2tab(index);
  };

  return (
    <div className={className}>
      {indexI == 0 && (
        <div className="intro-slide-inner">
          <div className="intro-title">
            <img src="./images/intro-title.png" alt="" className="mgmt-logo" />
            <div className="intro-desc">
              <span>A</span>ccelerating <span>B</span>usiness & <span>C</span>
              areer design
            </div>
          </div>
          <div className="intro-content">
            <div className="intro-button-wrap">
              <Carousel1 onClickPlanet={handlePlanetClick} />
            </div>

            <div className="intro-planet-slider">
              <div className="intro-planet-title">
                {clickedPlanet == 7
                  ? 'L.E.A.D 프로그램'
                  : info[clickedPlanet].title}
              </div>
              <div>
                {clickedPlanet == 7
                  ? 'L.E.A.D 프로그램은 미래 변화 관련 팀장 Level 구성원들의 Perspective 확장을 위해\n전략, 재무회계, HR, 마케팅, SCM/IP 직무의 핵심 주제 및 Issue 학습을 통한 미래 변화 대응 역량 제고 프로그램입니다.'
                  : info[clickedPlanet].desc}
              </div>
            </div>
          </div>
        </div>
      )}
      {indexI == 1 && (
        <div className="intro-slide-inner">
          <h5 className="title-area">
            초보부터 전문가까지,
            <br />
            단계별 학습 안내
            <div className="intro-balloon">
              <div>Management 직무 역량 학습은 3단계로 구분됩니다.</div>
              <img src="/images/suni-in1.png" alt="" />
            </div>
          </h5>
          <div className="intro-content">
            <Py
              hoverIndex={hoverIndex}
              handleMouseOver={handleMouseOverParent}
              handleMouseOut={handleMouseOutParent}
            />
            <div className="intro-content-wrap">
              <ul className={`content-card ${hoverIndex == 1 ? 'active' : ''}`}>
                <h6>
                  Lv.3 <span>Expert </span>
                  <span>(활용/해결)</span>
                </h6>
                <li>
                  <span>전문가 코칭과 PBL </span>기반
                  <br />
                  그룹 Talent 수준의
                  <span> 전문가 육성 과정</span>
                </li>
                <li>Biz. 전략과 연계된 특화 역량 및 통합적 Insight</li>
              </ul>
              <ul className={`content-card ${hoverIndex == 2 ? 'active' : ''}`}>
                <h6>
                  Lv.2 <span>Advanced </span>
                  <span>(적용/분석)</span>
                </h6>
                <li>
                  New Tech./Skill의{' '}
                  <span>
                    실무 적용을 위한
                    <br />
                    Intensive Workshop
                  </span>
                  중심 학습 과정
                </li>
                <li>일 경험으로 습득이 어려운 미래 직무 역량</li>
              </ul>
              <ul className={`content-card ${hoverIndex == 3 ? 'active' : ''}`}>
                <h6>
                  Lv.1 <span>Essentials </span>
                  <span>(인식/이해)</span>
                </h6>
                <li>
                  신입 구성원 및 이동 희망자 대상
                  <br />
                  <span>VOD 중심의 기초 직무 역량 </span>학습 과정
                </li>
                <li>공통 방법론 및 Process 등 기초역량</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {indexI == 2 && (
        <div className="intro-slide-inner">
          <h5 className="title-area">
            Lv.별
            <br />
            인증 정책
          </h5>
          <div className="intro-content">
            {intro2Title.map((title, index) => (
              <div
                key={`intro2Title-${index}`}
                onClick={() => tab2Change(index)}
                className={`intro2-btn intro2-btn${index} ${
                  intro2tab == index ? 'active' : ''
                }`}
              >{`Level ${index + 1}`}</div>
            ))}

            <div className="intro2-tab">
              <ul>
                <h6>인증 내용</h6>
                <li>{intro2Title[intro2tab][0]}</li>
              </ul>
              <ul>
                <h6>결과 활용</h6>
                {intro2Title[intro2tab][1].map((title, index) => (
                  <li key={`intro2Title-${index}`}>{title}</li>
                ))}
              </ul>
              <ul>
                <h6>인증 방식</h6>
                <li
                  className={
                    Array.isArray(intro2Title[intro2tab][2]) &&
                    intro2Title[intro2tab][2].includes(1)
                      ? 'active'
                      : ''
                  }
                >
                  객관식, 주관식 Test{' '}
                </li>
                <li
                  className={
                    Array.isArray(intro2Title[intro2tab][2]) &&
                    intro2Title[intro2tab][2].includes(2)
                      ? 'active'
                      : ''
                  }
                >
                  전문가 인터뷰 및<br />
                  다면 평가
                </li>
                <li
                  className={
                    Array.isArray(intro2Title[intro2tab][2]) &&
                    intro2Title[intro2tab][2].includes(3)
                      ? 'active'
                      : ''
                  }
                >
                  Case, Simulation 등 mini Pjt. 평가
                </li>
                <li
                  className={
                    Array.isArray(intro2Title[intro2tab][2]) &&
                    intro2Title[intro2tab][2].includes(4)
                      ? 'active'
                      : ''
                  }
                >
                  Capstone Pjt. 기반 문제해결
                </li>
              </ul>
              <ul>
                <h6>인증 주체</h6>
                <li
                  className={
                    Array.isArray(intro2Title[intro2tab][3]) &&
                    intro2Title[intro2tab][3].includes(1)
                      ? 'active'
                      : ''
                  }
                >
                  SK 전문교수단
                </li>
                <li
                  className={
                    Array.isArray(intro2Title[intro2tab][3]) &&
                    intro2Title[intro2tab][3].includes(2)
                      ? 'active'
                      : ''
                  }
                >
                  SK 현직
                  <br />
                  Leader Committee
                </li>
                <li
                  className={
                    Array.isArray(intro2Title[intro2tab][3]) &&
                    intro2Title[intro2tab][3].includes(3)
                      ? 'active'
                      : ''
                  }
                >
                  외부 전문기관
                  <br />
                  (대학, 컨설팅 등)
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {indexI == 3 && (
        <div className="intro-slide-inner">
          <h5 className="title-area">인증 체계 공신력 확보</h5>
          <div className="intro-content">
            <img src="./images/in-card1.png" alt="" />
            <img src="./images/in-card2.png" alt="" />
            <img src="./images/in-card3.png" alt="" />
          </div>
        </div>
      )}
      {indexI == 4 && (
        <div className="intro-slide-inner">
          <h5 className="title-area">Lv.별 인증 특징</h5>
          <div className="intro-content">
            <div className="intro4-title">{intro4Title[intro4tab]}</div>
            {intro4Title.map((title, index) => (
              <div
                key={`intro4Title-${index}`}
                onClick={() => tab4Change(index)}
                className={`intro4-btn intro4-btn${index} ${
                  intro4tab == index ? 'active' : ''
                }`}
              >{`Level ${index + 1}`}</div>
            ))}

            <div className="intro4-tab">
              {intro4tab == 0 && <SVGComponent1 />}
              {intro4tab == 1 && <SVGComponent2 />}
              {intro4tab == 2 && <SVGComponent3 />}
            </div>
          </div>
          <img src="./images/suni-in2.png" alt="" className="suni2" />
        </div>
      )}

      {indexI == 5 && !innerOpen && (
        <div className="intro-slide-inner">
          <h5 className="title-area">
            Mgmt. 직무 학습 콘텐츠 & 인증체계 특징 소개는 여기까지입니다.
          </h5>
          직무 별 자세한 내용은 행성 탐험을 통해 확인해 보세요!
          <div
            className="start-btn"
            onClick={() => {
              setPlay(true);
              setOpen(false);
            }}
          >
            입장하기
          </div>
        </div>
      )}
    </div>
  );
};

export const IntroSlider = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { open, innerOpen, setInnerOpen } = usePlay();
  useEffect(() => {
    // innerOpen 상태가 true일 때 currentSlide를 0으로 재설정합니다.
    if (innerOpen) {
      setCurrentSlide(0);
    }
  }, [innerOpen]);

  const handleClose = () => {
    setTimeout(() => {
      setInnerOpen(false);
    }, 800);
  };
  // 슬라이드 전체 개수 계산
  let totalSlides = innerOpen ? 5 : 6;

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

  for (let i = 0; i < totalSlides; i++) {
    renderSlides.push(
      <IntroSlide
        key={`introSlide-${i}`}
        slideTemplate={i}
        indexI={i}
        className={`intro-slide slide${i} ${
          currentSlide === i ? 'visible' : 'hidden'
        }`}
      />
    );
    slideIndex.push(
      <div
        key={`introSlideDot-${i}`}
        className={`slideDot ${currentSlide === i ? 'active' : ''}`}
      ></div>
    );
  }

  return (
    <div
      className={`intro-slider-container  ${
        open || innerOpen ? 'open' : 'close'
      }`}
    >
      {innerOpen ? (
        <div onClick={handleClose} className="close-btn">
          <img src="./images/slider/close.svg" alt="close-btn" />
        </div>
      ) : (
        ''
      )}

      <div className="intro-slider">{renderSlides}</div>

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
