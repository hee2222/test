import React, { useState, useEffect } from 'react';

const Slide = ({ slideTemplate, ...props }) => {
  return (
    <div {...props}>
      {slideTemplate == 1 && (
        <img
          src="./images/slider/img_01.png"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
      )}
      {slideTemplate == 2 && (
        <>
          <h1 className="page-title">
            <p className="sub-title">전략/조직설계 Lv.별 특징</p>
            고려사항
          </h1>
          <div className="box" data-aos="fade-up" data-aos-duration="1500">
            <div className="description">
              <h2>
                <b>Level1</b>
                <br />
                Essential
              </h2>
              <p>OJT와 함께 Entry 인력의 기본기 강화에 학습을 활용</p>
              <p>전략 Foundation에 해당하는 영역별 실무지식, 방법론 학습</p>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="1500">
            <div className="description">
              <h2>
                <b>Level2</b>
                <br />
                Professional
              </h2>
              <p>
                SK그룹 경영 Agenda를 사별 Biz./조직 특성, 산업/경쟁 현황 등을
                고려하여 적용 및 Practice 확보
              </p>
              <p>일 경험을 통한 체득이 어려운 미래 직무 관점 upskilling 중심</p>
            </div>
          </div>
        </>
      )}
      {slideTemplate == 3 && (
        <>
          <h1
            className="page-title"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <p className="sub-title">전략/조직설계 인증 방안</p>
            특징 · 활용
          </h1>
          <div className="box2" data-aos="fade-up" data-aos-duration="1500">
            <div className="description">
              <h2>
                <b>Essential</b>
                <br />
                Lv.1
              </h2>
              <p>개념 및 방법론 등 기초 직무 이해 수준 검증</p>
              <p>학습-인증 분리(인증만 가능)</p>
            </div>
          </div>
          <div className="box2" data-aos="fade-up" data-aos-duration="1500">
            <div className="description">
              <h2>
                <b>Professional(Advanced)</b>
                <br />
                Lv.2
              </h2>
              <p>실무자 수준의 미래역량의 현업 적용방안 보유</p>
              <p>학습-인증 분리</p>
            </div>
          </div>
        </>
      )}
      {slideTemplate == 4 && (
        <>
          <div className="slider-inner">
            <h1
              className="page-title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p className="sub-title">전략/조직설계 학습인증</p>
              1단계
            </h1>
            <div className="box3" data-aos="fade-up" data-aos-duration="1500">
              <span></span>
              <div className="content">
                <h2>인증 특징</h2>
                <p>
                  1단계 역량 인증은 전략 과정의 기초 개념 및 방법론 등 전략의
                  기본 개념정의 및 기초 활용방안에 대한 역량 보유 여부를
                  확인하고자 합니다.
                  <br />
                  <br />
                  전략 1단계 인증은Strategy Essential / 조직 Self Design
                  Essential 로 구성되며, Strategy Essential은 전략 수립을 위한
                  내·외부 경영 환경 분석 방법론 개념과 활용, 조직 Self Design
                  Essential은 리더가 알아야 할 조직 설계의 기본 개념과 방법론에
                  대해 문항이 제출됩니다. <br />
                  <br />
                  추천 대상자는 전략 직무 신규 입사자 및 이동 희망자, 직무 경험
                  3년 이내의 초보자 입니다.
                </p>
              </div>
            </div>
            <div className="box3" data-aos="fade-up" data-aos-duration="1500">
              <span></span>
              <div className="content">
                <h2>방법</h2>
                <p>
                  1단계 전략 인증은 객관식 Test와 전문가 인터뷰로 진행되며,총
                  20문항에 대해서, 40분간 진행될 예정입니다.or 인터뷰로
                  진행되며, 총 10~15문항에 대해서, 1시간 내외로 진행될
                  예정입니다. (대면/비대면 가능)
                  <br />
                  <br />본 인증은 80점 이상일 경우 Pass, 80점 이하일 경우
                  Fail이며,Fail의 경우 재 응시는 불가합니다.(사별 정책에 따라 재
                  응시가 가능하거나, 과정 수강과 별개로 진행할 수 있습니다.)
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const Slider = ({ sectionKey, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const renderInfo = [1, 2, 3, 4];
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? renderInfo.length - 1 : prevSlide - 1
    );
    console.log(currentSlide);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === renderInfo.length - 1 ? 0 : prevSlide + 1
    );
    console.log(currentSlide);
  };

  const renderSlides = [];

  for (let i = 0; i < renderInfo.length; i++) {
    renderSlides.push(
      <Slide
        key={`${sectionKey}-${i}`}
        slideTemplate={renderInfo[i]}
        className={`slide slide${sectionKey}-${i} ${
          currentSlide === i ? 'visible' : 'hidden'
        }`}
        style={{ visibility: currentSlide === i ? 'visible' : 'hidden' }}
      />
    );
  }

  return (
    <div className="slider-container">
      <div onClick={handleClose} className="close">
        Close
      </div>
      <div className="slider">{renderSlides}</div>
      <button onClick={handleNextSlide} className="prevBtn">
        <img src="./images/right.svg" alt="arrow-prev" width={40} height={40} />
      </button>
      <button onClick={handlePrevSlide} className="nextBtn">
        <img src="./images/left.svg" alt="arrow-next" width={40} height={40} />
      </button>
    </div>
  );
};

export default Slider;
