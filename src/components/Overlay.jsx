import React, { useState, useMemo } from 'react';
import { useProgress } from '@react-three/drei';
import { usePlay } from '../contexts/Play';
import { IntroSlider } from './IntroSlider';
// import { ReIntroSlider } from './ReIntroSlider';
import info from '../assets/info.js';
import Intro from './intro';

export const Overlay = ({}) => {
  const { progress } = useProgress();
  const {
    play,
    end,
    setEnd,
    setPlay,
    hasScroll,
    innerOpen,
    innerEndOpen,
    setInnerEndOpen,
  } = usePlay();
  // const [sectionClose, setSectionClose] = useState(false);
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
          [
            '조직 Self-Design',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-db',
          ],
          [
            'Strategy Essentials',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-dc',
          ],
          [
            'Financial Story',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-2z',
          ],
          [
            'Scenario Planning',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-40',
          ],
        ],
        [
          ['기업가치 핵심인자 기반 경영성과관리', ''],

          [
            '사업실사(CDD) 심화',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-19bc',
          ],
          [
            'Fund 활용 M&A',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-asr',
          ],
          [
            'Deal Structuring & Financing',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-afq',
          ],
          ['Cross Border M&A Intensive(오픈예정)', ''],
          ['Global Market Penetration(오픈예정)', ''],
          ['Risk Sensing & Response Planning(오픈예정)', ''],
        ],
      ],
      [
        [
          [
            'Financial Story 개념과 사례',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-83r ',
          ],
          [
            '전사원이 함께하는 회계원리',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-155c ',
          ],
          [
            '내부회계관리제도',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-5i0',
          ],
          [
            '기업가치, 무엇이고 어떻게 평가하는가?',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-a4j ',
          ],
          [
            '한 달 만에 끝내는 원가관리회계',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-155a',
          ],
        ],
        [
          [
            'M&A 전략의 성공적인 의사결정을 위한 재무회계 실무',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-14d7',
          ],
          [
            '기업가치 제고를 위한 ESG Workshop',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-18vu',
          ],
          ['Cross-border Valuation 실무 Workshop(오픈예정)', ''],
          ['Global 자산관리 실무 Workshop(오픈예정)', ''],
          ['Due Diligence 실무 Workshop(오픈예정)', ''],
          ['EXIT 전략 실무 Workshop(오픈예정)', ''],
        ],
        [['자본시장전문가 과정(오픈예정)', '']],
      ],
      [
        [
          [
            'Data 마케팅 101',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-6e',
          ],
          [
            '브랜드 Essentials',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4c',
          ],
          [
            '마케팅 Essentials',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-4a',
          ],
          ['Global Branding & MKT Communication(오픈예정)', ''],
        ],
        [
          [
            'Data driven MKT',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-80',
          ],
          [
            'Strategic 제안 영업',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-18x3',
          ],
          [
            'B2B MKT Pipeline 관리',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-152a',
          ],
          ['DT 기반 고객 Engagement(오픈예정)', ''],
        ],
        [
          [
            'AI/데이터 마케팅 Expert',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-15ig',
          ],
        ],
      ],
      [
        [
          [
            'HR Essentials',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-a74',
          ],
          [
            'Data Driven HR',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-15n5',
          ],
          [
            '면접위원 교육과정(Essential)',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-16me',
          ],
          ['보상제도 설계 How to(오픈예정)', ''],
        ],
        [
          [
            '기업가치기반 보상 설계/운영',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-gs',
          ],
          ['Cross Border M&A HR Risk 점검(오픈예정)', ''],
          ['면접위원 교육과정(Advanced)(오픈예정)', ''],
        ],
        [
          [
            'HR Expert',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-15dr',
          ],
          ['ER 전문가(오픈예정)', ''],
        ],
      ],
      [
        [
          [
            'Procurement 혁신',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-14hb',
          ],
          [
            '구매원가관리',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-9qq',
          ],
          [
            '성공적인 구매 협상',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-9qh',
          ],
          ['Global 공급망 Dynamics 이해(오픈예정)', ''],
        ],
        [
          [
            '최적 구매원가 관리',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-19gv',
          ],
          ['Global SCM 최적화 전략 수립(오픈예정)', ''],
          ['공급망 Dynamics 대응 전략 수립(오픈예정)', ''],
        ],
      ],
      [
        [
          [
            'IP Literacy',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-dh',
          ],
          [
            'Open Source',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-a5k',
          ],
          [
            '성공적인 사업화 Starting point : IP 계약',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-14hf',
          ],
        ],
        [
          [
            'Global 특허제도 & 법',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-14hs',
          ],
          [
            '특허 Licensing / 소송 실무',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-a5d',
          ],
          [
            '특허관리 실무',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-a5h',
          ],
          ['전략적 미국 특허출원(오픈예정)', ''],
        ],
        [
          [
            '특허분쟁 전문가',
            'https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-a4',
          ],
        ],
      ],
      [
        [
          [
            'ESG 법적 쟁점 및 기업의 대응 전략',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-156z',
          ],
          [
            '이사회 중심 경영의 이해',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-14uk',
          ],
          ['Global 사업 계약서 분석 기본(오픈예정)', ''],
        ],
        [
          [
            '공정거래법 주요 내용과 및 개정상의 시사점',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-156z',
          ],
          [
            '회사법 개정으로 인한 주요 Risk 및 대응 방안',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-aef',
          ],
          [
            '최근 법률 쟁점과 우리의 대응',
            'https://mysuni.sk.com/suni-main/lecture/card/CARD-156s',
          ],
          ['북미 사업 계약서 검토 실무(오픈예정)', ''],
        ],
      ],
    ],
    []
  );

  const handleEndClose = () => {
    setInnerEndOpen(false);
  };

  return (
    <div
      className={`overlay ${play ? 'overlay--disable' : ''}
    ${end ? 'overlay--end' : ''}
    ${hasScroll ? 'overlay--scrolled' : ''}`}
    >
      {/* {progress === 100 && ( */}
      <div className={`intro ${play ? 'intro--disappear' : ''}`}>
        <Intro />
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

        {(open !== false || innerOpen !== false) && (
          <IntroSlider
          // introSliderVisible={introSliderVisible}
          // onClose={handleCloseSlider}
          />
        )}
        {/* <ReIntroSlider /> */}
      </div>
      {/* )} */}
      <div
        className={`outro ${
          end === true || innerEndOpen === true ? 'outro--appear' : 'close'
        }`}
      >
        {(end || innerEndOpen) && (
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
              {end && (
                <a
                  className="out-replay-btn"
                  onClick={() => {
                    setPlay(true);
                    setEnd(false);
                  }}
                >
                  다시
                  <br />
                  여행하기
                </a>
              )}
            </div>
            {innerEndOpen ? (
              <div className="close-btn" onClick={handleEndClose}>
                <img src="./images/slider/close.svg" alt="close-btn" />
              </div>
            ) : (
              ''
            )}
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
                    <div className="outro-content-desc">{info[i].desc}</div>
                    <div className="outro-content-level-wrap">
                      <div className="outro-content-level">
                        <h5>
                          Lv.1 <span>Essentials</span>
                        </h5>
                        <ul className="outro-content-level-list">
                          {textRoadmap[0].map((list, n) => (
                            <li key={`list1-${n}`}>
                              <a href={list[1]} target="_blank">
                                {list[0]}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {textRoadmap[1] && (
                        <div className="outro-content-level">
                          <h5>
                            Lv.2 <span>Advanced</span>
                          </h5>
                          <ul className="outro-content-level-list">
                            {textRoadmap[1].map((list, n) => (
                              <li key={`list2-${n}`}>
                                <a href={list[1]} target="_blank">
                                  {list[0]}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {textRoadmap[2] && (
                        <div className="outro-content-level">
                          <h5>
                            Lv.3 <span>Expert</span>
                          </h5>
                          <ul className="outro-content-level-list">
                            {textRoadmap[2].map((list, n) => (
                              <li key={`list3-${n}`}>
                                <a href={list[1]} target="_blank">
                                  {list[0]}
                                </a>
                              </li>
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
        )}
      </div>
    </div>
  );
};
