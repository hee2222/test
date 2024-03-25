import React, { useEffect, useState, useMemo } from 'react';
import { useProgress } from '@react-three/drei';
import { usePlay } from '../contexts/Play';
import { IntroSlider } from './IntroSlider';
import Intro from './intro';

export const Overlay = ({ introSliderVisible }) => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const [sectionClose, setSectionClose] = useState(false);
  const [tab, setTab] = useState(0);

  const textTitle = useMemo(
    () => [
      '전략/조직설계',
      '재무/회계',
      '마케팅',
      'HR',
      '구매/SCM',
      'IP',
      '법무',
    ],
    []
  );
  const tabChange = (index) => {
    setTab(index);
  };
  const textRoadmap = useMemo(
    () => [
      [
        [
          '전략 직무의 특징은 전략 직무를 시작하는 분들을 위한 기본기부터 SK에서 가장 Hot한 전략적 Agenda를 접목하기 위한 Skill을 획득할 수 있습니다.',
        ],
        [
          '조직 Self-Design',
          'Strategy Essentials',
          'Financial Story',
          'Scenario Planning',
        ],
        [
          'Cross Border M&A Intensive',
          '기업가치 핵심인자 기반 경영성과관리',
          'Global Market Penetration',
          'Risk Sensing & Response Planning',
        ],
      ],
      [
        [
          '재무회계 직무의 특징은 단계별 직무수행에 따른 재무 주요 Issue에 대해 학습할 수 있으며, 재무회계 뿐 아니라 Investment 관점에서도 폭넓은 재무회계를 이해할 수 있는 과정입니다.',
        ],
        [
          'Financial Story 개념 이해',
          '재무회계 Essentials',
          'Financial Account Market Watch',
          'SK 재무회계 제도 이해',
        ],
        [
          'Data 기반 재무 의사결정',
          'Global 자본 조달',
          '기업가치제고를 위한 ESG 재무제표 연계',
          '해외 투자 Risk 관리',
        ],
        ['투자관리 전문가', '재무 Portfolio 관리전문가'],
      ],
      [
        [
          '시장/트렌드 분석, 고객 경험 Design 및 효과적인 Comm. 전략 등  고객/시장 관련 다양한 제반 지식과 Framework 을 체계적으로 학습함으로써 현업 문제 해결을 위한 실무 역량을 제고합니다.',
        ],
        [
          'Brand & Reputation기반 글로벌 MKT Comm. 전략',
          'Data 마케팅 101',
          '브랜드 Essentials',
          '마케팅 Essentials',
        ],
        [
          'Data driven MKT',
          'DT 기반 고객 Engagement',
          'Strategic 제안 영업',
          'B2B MKT Pipeline 관리',
        ],
        ['DT 마케팅 Expert'],
      ],
      [
        [
          'HR 과정의 특징은 입문자를 위한 기초과정과 더불어 외부 교육과정 또는 일 경험을 통해 쉽게 습득할 수 없는 Skill 함양을 통해 미래 Agenda에 선제적인 대응력 강화, 통합적 전문성과 전략적 시각 확보에 초점을 맞추고 있습니다.',
        ],
        [
          'ER Essentials',
          'Global HR Essentials',
          '성과관리 Essentials',
          '인력 확보 Essentials',
        ],
        [
          '미국 기업 M&A 대응  및 노사관계 안정화',
          'Data 기반 Talent Mining & Mgmt.',
          '기업가치기반 보상 설계/운영',
          '근로 및 노사관계 변화 대응전략(ER)',
        ],
        ['ER 전문가'],
      ],
      [
        [
          '구매/SCM 직무의 특징은 전사적 관점의 SCM 최적화 및 Industry Value Chain 관점에서 관리 Skill을 획득할 수 있습니다.',
        ],
        [
          'Global 공급망 Dynamics 이해',
          'Procurement 혁신',
          '구매원가관리',
          '성공적인 구매 협상',
        ],
        [
          '최적 구매원가 관리',
          'Global SCM 최적화 전략 수립',
          '공급망 Dynamics 대응 전략 수립',
        ],
      ],
      [
        [
          'IP 직무 과정의 특징은 IP 담당자뿐만 아니라 지식재산을 창출하는 사업직군의 구성원들이 IP에 대한 중요성과 대응 방안에 대해 쉽게 이해할 수 있도록 하며, Global IP업무에도 실질적으로 대응 가능하도록 법률 전문가 수준의 학습을 제공하고 있습니다.',
        ],
        [
          '연구개발과 지식재산',
          'BM 혁신을 위한 특허경영',
          'Open Source',
          'IP Literacy',
        ],
        [
          '전략적 미국 특허출원',
          'Global 특허제도 & 법',
          '특허 Licensing / 소송 실무',
          '특허관리 실무',
        ],
        ['특허분쟁 전문가'],
      ],
      [
        [
          '법무 직무의 특징은 기업법무에 대한 이해도를 제고하고 전문성을 강화할 수 있는데 도움을 제공 한다는 것입니다.',
        ],
        [
          'ESG 법적 쟁점 및 기업의 대응 전략',
          'News를 통해 보는  법무 상식',
          '기업 법무의 A to Z',
          '북미 사업 계약서 분석 기본',
        ],
      ],
    ],
    []
  );
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCloseSlider = () => {
    setSectionClose(false);
  };

  // useEffect(() => {
  //   const handleClick = () => {
  //     // play가 false이고 화면이 터치 또는 클릭된 경우
  //     if (!play) {
  //       setPlay(true); // play 상태를 true로 변경
  //     }
  //   };
  //   handleClick()
  //   // 컴포넌트가 마운트되었을 때 클릭 이벤트 추가
  //   // window.addEventListener('click', handleClick);

  //   // 컴포넌트가 언마운트될 때 이벤트 제거
  //   return () => {
  //     window.removeEventListener('click', handleClick);
  //   };
  // }, [play, setPlay]);

  return (
    <div
      className={`overlay ${play ? 'overlay--disable' : ''}
    ${end ? 'overlay--end' : ''}
    ${hasScroll ? 'overlay--scrolled' : ''}`}
    >
      <div
        className={`loader ${progress === 100 ? 'loader--disappear' : ''}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? 'intro--disappear' : ''}`}>
          {showIntro && <Intro />}
          <a href="/" className="logo">
            <img
              src="./images/logo.png"
              alt="suni-logo"
              height={32}
              className="logo"
            />
          </a>

          <img
            src="./images/scroll-icon.svg"
            alt="scroll"
            width={16}
            className="scrollIcon"
          />
          <img
            src="./images/immerse.png"
            alt="immerse-logo"
            height={40}
            className="immerse"
          />
          <IntroSlider
            introSliderVisible={introSliderVisible}
            onClose={handleCloseSlider}
          />
        </div>
      )}
      <div className={`outro ${end ? 'outro--appear' : ''}`}>
        <div className="outro-container">
          <div className="outro-balloon-wrap">
            <div className="outro-balloon">
              <h1>즐거운 여행 되셨나요?</h1>
              <div>
                Mgmt’s A.B.C Galaxy 여행은 여기까지입니다.
                <br />
                돌아가기 전에 직무별 <span>Curriculum</span>을 확인해보세요!
              </div>
              <img src="/images/suni-out.png" alt="" />
            </div>
            <a href="/" className="out-replay-btn">
              다시 여행하기
            </a>
          </div>
          <div className="outro-btn-wrap">
            {textTitle.map((textTitle, index) => (
              <div
                key={`textTitle-${index}`}
                className={index == tab ? 'active' : ''}
                onClick={() => tabChange(index)}
              >
                {textTitle}
              </div>
            ))}
          </div>

          <div className="outro-wrap">
            <div>
              {textRoadmap.map((textRoadmap, i) => (
                <div
                  className={`outro-content-wrap ${i == tab ? 'active' : ''}`}
                  key={`textRoadmap${i}`}
                >
                  <div className="outro-content-desc">{textRoadmap[0]}</div>
                  <div className="outro-content-level-wrap">
                    <div className="outro-content-level">
                      <h5>Level1. 인식 / 이해</h5>
                      <ul className="outro-content-level-list">
                        {textRoadmap[1].map((list, n) => (
                          <li key={`list1-${n}`}>{list}</li>
                        ))}
                      </ul>
                    </div>
                    {textRoadmap[2] && (
                      <div className="outro-content-level">
                        <h5>Level2. 적용 / 분석</h5>
                        <ul className="outro-content-level-list">
                          {textRoadmap[2].map((list, n) => (
                            <li key={`list2-${n}`}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {textRoadmap[3] && (
                      <div className="outro-content-level">
                        <h5>Level3. 활용 / 응용</h5>
                        <ul className="outro-content-level-list">
                          {textRoadmap[3].map((list, n) => (
                            <li key={`list3-${n}`}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
