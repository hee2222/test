import { ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Experience } from './components/Experience';
import { easing } from 'maath';
import { Overlay } from './components/Overlay';
import { Slider } from './components/Slider';
import { usePlay } from './contexts/Play';
import { BlendFunction } from 'postprocessing';
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing';

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.rotation,
      [state.mouse.y * 0.05, -state.mouse.x * 0.05, 0],
      0.2,
      delta
    );
  });
}

function App() {
  const { play, end } = usePlay();
  const [selectedSection, setSelectedSection] = useState(null);
  const scroll = useScroll();

  const handleSectionClick = (sectionKey) => {
    setSelectedSection(sectionKey);
  };

  const handleCloseSlider = () => {
    setSelectedSection(null);
  };

  // const handleScrollButtonClick = () => {
  //   scroll.scrollTo({ top: 1000 });
  // };
  return (
    <>
      <Canvas>
        <color attach="background" args={['#ececec']} />
        <ScrollControls
          pages={play && !end ? 150 : 0}
          damping={0.2}
          maxSpeed={0.1}
          style={{
            top: '10px',
            left: '0px',
            bottom: '10px',
            right: '10px',
            width: 'auto',
            height: 'auto',
            animation: 'fadeIn 2.4s ease-in-out 1.2s forwards',
            opacity: 0,
          }}
        >
          <Experience onSectionClick={handleSectionClick} />
        </ScrollControls>
        <EffectComposer>
          <Noise opacity={0.03} />
          <Vignette eskil={false} offset={0.1} darkness={0.9} />
        </EffectComposer>
        <Rig />
      </Canvas>
      <Overlay />

      {selectedSection !== null && (
        <Slider sectionKey={selectedSection} onClose={handleCloseSlider} />
      )}
    </>
  );
}

export default App;
