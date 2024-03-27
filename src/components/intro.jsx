import React, { useRef, useState, useEffect } from 'react';

const Intro = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
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
      {showVideo && (
        <div>
          <video muted autoPlay ref={videoRef}>
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
