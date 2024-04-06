import React, { useRef, useState, useEffect } from 'react';

const Intro = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById('introvideo');

    const handleLoadedData = () => {
      setVideoLoaded(true);
    };

    if (video) {
      video.addEventListener('loadeddata', handleLoadedData);

      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const skipVideo = () => {
    // Define the time to skip to (in seconds)
    const skipTime = 10; // Adjust this value according to your preference

    // Check if the video element is available
    if (videoRef.current) {
      // Skip the video to the defined time
      videoRef.current.currentTime += skipTime;

      // Hide the video immediately
      setShowVideo(false);
    }
  };
  return (
    <>
      <div className={`loader ${videoLoaded ? 'loader--disappear' : ''}`}>
        <img
          src="./images/intro.png"
          alt="suni-logo"
          height={32}
          className="logo"
        />
      </div>
      {showVideo && (
        <div>
          <video muted autoPlay ref={videoRef} id="introvideo">
            <source src="/video/suni-video.mp4" type="video/mp4" />
          </video>
          <button id="skip-button" onClick={skipVideo}>
            Skip
          </button>
        </div>
      )}
    </>
  );
};

export default Intro;
