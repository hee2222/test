import React from 'react';

export const Slide2 = () => {
  return (
    <div className="container">
      <h2 className="main_tit">Lv.별 공통 특징</h2>
      <div className="left_img">
        <img src="./images/1-2.png" alt="Icon" />
      </div>
      <div className="tab_table">
        <div className="table">
          <div className="block">
            <div>
              <b className="lv3">Lv3. 활용/응용 </b>
              <ul className="options">
                <li>
                  <div>
                    직무 전문가 및 미래 Leader를 위한
                    <br />
                    <b>Biz.전략과 연계된 특화역량 in-depth 학습</b>
                  </div>
                </li>
                <li>
                  <div>Specialist로서 인증이 가능한 영역</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="block">
            <div>
              <b className="lv2">Lv2. 적용/분석 </b>
              <ul className="options">
                <li>
                  <div>
                    실무자를 위한 직무의
                    <br /> <b> 미래 혁신/변화 Agenda 학습</b>{' '}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="block">
            <div>
              <b className="lv1">Lv1. 인식 / 이해</b>
              <ul className="options">
                <li>
                  <div>
                    <b>New Comer의 조기전력화</b>를 위한
                    <br />
                    직무 기초 개념 이해 및 Trend 학습
                  </div>
                </li>
                <li>
                  <div>학습 - 현업 업무간 기초 방안 이해 차원</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
