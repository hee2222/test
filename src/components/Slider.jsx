import React, { useState } from 'react';
import info from '../assets/info.js';

const Slide = ({ sectionKey, indexI, indexJ, slideKey, className }) => {
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
                <li data-id="card1" className="active">
                  Lv1. Essential
                </li>
                <li data-id="card2">Lv2. Advanced</li>
              </ul>
              <div className="tab-contents">
                <div className="card" id="card1">
                  <div>
                    <h6>고려사항</h6>
                    <ul>
                      <li>
                        재무회계 직무 수행을 위한 필수 지식과 경험이 필요한 시기
                      </li>
                      <li>
                        각 영역의 업무 기초 개념, 방법론 등 기본기 제공 및
                        평가/인증
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6>학습대상</h6>
                    <ul>
                      <li>
                        재무회계 직무 수행을 위한 필수 지식과 경험이 필요한 시기
                      </li>
                      <li>
                        각 영역의 업무 기초 개념, 방법론 등 기본기 제공 및
                        평가/인증
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-desc">
            <div className="desc-content">
              재무회계 직무의 특징은 단계별 직무수행에 따른 재무 주요 Issue에
              대해 학습할 수 있으며, 재무회계 뿐 아니라 Investment 관점에서도
              폭넓은 재무회계를 이해할 수 있는 과정입니다.
            </div>
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
            <div className="scroll-contents">
              <div className="scroll-card">
                <h6>전략 입문자를 위한 기본기 다지기</h6>
                <div className="list-title">직무별 주요 개념</div>
                <ul>
                  <li>[Strategy Essential] 경영전략 기본 개념과 방법론 이해</li>
                  <li>
                    [조직 Self-Design Essential] 현업 리더가 알아야 할 조직
                  </li>
                  <li>
                    설계 기본 [Financial Story] 되고 싶은 나를 구현하기 위한
                  </li>
                  <li>
                    파트너십 구축 이해 [Scenario Planning Essential] 시나리오
                  </li>
                  <li>플래닝 방법론 및 사례 이해</li>
                </ul>
              </div>
              <div className="scroll-card">
                <h6>전략 입문자를 위한 기본기 다지기</h6>
                <div className="list-title">직무별 주요 개념</div>
                <ul>
                  <li>[Strategy Essential] 경영전략 기본 개념과 방법론 이해</li>
                  <li>
                    [조직 Self-Design Essential] 현업 리더가 알아야 할 조직
                  </li>
                  <li>
                    설계 기본 [Financial Story] 되고 싶은 나를 구현하기 위한
                  </li>
                  <li>
                    파트너십 구축 이해 [Scenario Planning Essential] 시나리오
                  </li>
                  <li>플래닝 방법론 및 사례 이해</li>
                </ul>
              </div>
              <div className="scroll-card">
                <h6>전략 입문자를 위한 기본기 다지기</h6>
                <div className="list-title">직무별 주요 개념</div>
                <ul>
                  <li>[Strategy Essential] 경영전략 기본 개념과 방법론 이해</li>
                  <li>
                    [조직 Self-Design Essential] 현업 리더가 알아야 할 조직
                  </li>
                  <li>
                    설계 기본 [Financial Story] 되고 싶은 나를 구현하기 위한
                  </li>
                  <li>
                    파트너십 구축 이해 [Scenario Planning Essential] 시나리오
                  </li>
                  <li>플래닝 방법론 및 사례 이해</li>
                </ul>
              </div>
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
                <li data-id="level1" className="active">
                  Level 1
                </li>
                <li data-id="level2">Level 2</li>
              </ul>
              <div className="tab-contents">
                <div className="table-header">
                  <span>인증명</span>
                  <span>인증 내용</span>
                  <span>추천학습</span>
                  <span>인증 방식</span>
                </div>
                <div className="level" id="level1">
                  <div className="table-content">
                    <div>
                      <span className="course-title">Strategy Essential</span>
                      <ul>
                        <li>전략 101: 어서 와, 전략은 처음이지?</li>
                      </ul>
                      <ul>
                        <li>
                          Strategy Essengtial은 전략 수립을 위한 내/외부 경영
                          환경 분석 방법론 개념과 활용
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="course-title">
                        조직 Self Design Essential
                      </span>
                      <ul>
                        <li>리더가 알아야 할 조직 설계의 기본 개념과 방법론</li>
                      </ul>
                      <ul>
                        <li>전략 101: 어서 와, 전략은 처음이지?</li>
                      </ul>
                    </div>
                  </div>
                  <div className="last-cell">
                    <ul>
                      <li>객관식 Test - 총 20문항 40분</li>
                      <li>
                        전문가 인터뷰 -총 10-15문항, 1시간 내외 (대면 / 비대면
                        선택 가능)
                      </li>
                      <li>80점 이상 Pass, 재응시 1회 가능 (연 내)</li>
                    </ul>
                  </div>
                </div>
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
    }, 1000);
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

  var k = 0;
  for (let i = 0; i < renderObject['slide'].length; i++) {
    // slideContent = renderObject['slide'][i][j];

    renderSlides.push(
      <Slide
        key={`${sectionKey}-${i}`}
        slideTemplate={i}
        slideKey={renderObject}
        sectionKey={sectionKey}
        // slideContent={slideContent}
        indexI={i}
        className={`slide slide${i} ${
          currentSlide === k ? 'visible' : 'hidden'
        }`}
      />
    );
    k++;
  }

  return (
    <div className={`slider-container ${isOpen ? 'open' : 'close'}`}>
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
    </div>
  );
};
