import React, { useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import { usePlay } from '../contexts/Play';

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  useEffect(() => {
    const handleClick = () => {
      // play가 false이고 화면이 터치 또는 클릭된 경우
      if (!play) {
        setPlay(true); // play 상태를 true로 변경
      }
    };

    // 컴포넌트가 마운트되었을 때 클릭 이벤트 추가
    window.addEventListener('click', handleClick);

    // 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [play, setPlay]);

  return (
    <div
      className={`overlay ${play ? 'overlay--disable' : ''}
    ${hasScroll ? 'overlay--scrolled' : ''}`}
    >
      <div
        className={`loader ${progress === 100 ? 'loader--disappear' : ''}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? 'intro--disappear' : ''}`}>
          <a href="/" className="logo">
            <img
              src="./images/logo.png"
              alt="suni-logo"
              height={32}
              className="logo"
            />
          </a>
          <img
            src="./images/intro.png"
            alt="intro"
            width={120}
            className="intro-logo"
          />
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
        </div>
      )}
      <div className={`outro ${end ? 'outro--appear' : ''}`}>
        <img src="./images/ending.jpg" alt="ending" className="ending-image" />
      </div>
    </div>
  );
};
