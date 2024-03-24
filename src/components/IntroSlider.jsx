import React, { useState, useEffect } from 'react';
import { usePlay } from '../contexts/Play';
import { Carousel1 } from './Carousel';

const IntroSlide = ({ indexI, className }) => {
  const intro4Title = [
    '【 초보자를위한 기초직무 역량 skill 인증 】',
    '【 초보자를위한 기초직무 역량 skill 인증 】',
    '【 그룹 Expert 검증을 위한 직무전문역량 skill 인증 】',
  ];
  const intro2Title = [
    [
      '직무 기초 개념 및 방법론/Process/Framework 등에 대한 Knowledge 이해 수준 평가',
      ['직무 경력 3년차 미만 역량 개발', '직무 이동/인력 배치 시 최소 요건화'],
      [1, 2],
      [1, 3],
    ],
    [
      '미래 역량의 실무 적용 관점에서 현업 적용 방법, Issue/문제 해결력 중심 평가',
      ['직무 경력 3년차 미만 역량 개발', '직무 이동/인력 배치 시 최소 요건화'],
      [2, 3],
      [1, 3],
    ],
    [
      'Specialist로서 갖춰야 할 통합적 전문성과 전략적 시각 기반 Pjt. 기반 문제 해결 수준 및 성과 평가',
      ['그룹 수준의 Talent 인증', 'SKOUGHT 인재 Pool in'],
      [2, 3],
      [1, 3],
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
          </div>
          <div className="intro-content">
            <div className="intro-button-wrap">
              <Carousel1 />
            </div>
            <div className="intro-desc">
              Management 직무는 기업의 전략수립/운영/관리 등 Biz.실행 역량
              제고를 위한 직무 역량 학습을 제공하며,
              <br />
              전략/조직설계, 재무, 마케팅, HR, SCM(공급망/물류), 법무, IP,
              Competency 총 8개 직무, 242개 Contents로 구성되어 있습니다.
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
            <img src="/images/pri.png" alt="" />
            <div className="intro-content-wrap">
              <ul className="content-card">
                <h6>
                  Lv.3 <span>활용/해결</span>
                </h6>
                <li>
                  직무 전문가 및 미래 Leader를 위한{' '}
                  <span>Biz.전략과 연계된 특화역량 in-depth 학습</span>
                </li>
                <li>Specialist로서 인증이 가능한 영역</li>
              </ul>
              <ul className="content-card">
                <h6>
                  Lv.2 <span>적용/분석</span>
                </h6>
                <li>
                  실무자를 위한 <span>직무의 미래 혁신/변화 Agenda 학습</span>
                </li>
                <li>경영 현장의 Issue/실무 Agenda 해결</li>
              </ul>
              <ul className="content-card">
                <h6>
                  Lv.1 <span>인식/이해</span>
                </h6>
                <li>
                  <span>New Comer의 조기전력화</span>를 위한 직무 기초 개념 이해
                  및 Trend 학습
                </li>
                <li>학습 – 현업 업무간 기초 방안 이해 차원</li>
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
                  전문가 인터뷰 및 다면 평가
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
                  SK 현직 Leader Committee
                </li>
                <li
                  className={
                    Array.isArray(intro2Title[intro2tab][3]) &&
                    intro2Title[intro2tab][3].includes(3)
                      ? 'active'
                      : ''
                  }
                >
                  외부 전문기관(대학, 컨설팅 등)
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
              <img src={`./images/in-lv${intro4tab + 1}.svg`} alt="" />
            </div>
          </div>
          <img src="./images/suni-in2.png" alt="" class="suni2" />
        </div>
      )}
      {indexI == 5 && (
        <div className="intro-slide-inner">
          <h5 className="title-area">
            Mgmt A.B.C Galaxy의 기본 소개는 이걸로 끝이야.
          </h5>
          이제 직무 행성으로 다같이 떠나볼까?
        </div>
      )}
    </div>
  );
};

export const IntroSlider = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const { setPlay } = usePlay();
  // 슬라이드 전체 개수 계산
  let totalSlides = 6;

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
    <div className={`intro-slider-container  ${isOpen ? 'open' : 'close'}`}>
      <div
        className="close-btn"
        onClick={() => {
          setPlay(true);
          handleClose();
        }}
      >
        <img src="./images/slider/close.svg" alt="close-btn" />
      </div>
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
