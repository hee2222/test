import { ScrollControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useMemo } from 'react';
import { Experience } from './components/Experience';
import { easing } from 'maath';
import { Overlay } from './components/Overlay';
import { Slider } from './components/Slider';
import { usePlay } from './contexts/Play';
import { ButtonGrid } from './components/ButtonGrid';
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
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (sectionKey) => {
    setSelectedSection(sectionKey);
  };

  const handleCloseSlider = () => {
    setSelectedSection(null);
  };

  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.1} darkness={0.9} />
      </EffectComposer>
    ),
    []
  );

  const [scrollBtn, setScrollBtn] = useState(0);

  // 버튼 클릭 시 호출되는 함수
  const handleButtonClick = (value) => {
    // 클릭 시 받은 값으로 scrollBtn 상태 업데이트
    setScrollBtn(value * 0.1 + 0.1 - 0.02);
    console.log('Button clicked with scroll value:', value);
  };

  return (
    <>
      <Canvas>
        <color attach="background" args={['#ececec']} />
        <ScrollControls
          pages={play && !end ? 10 : 0}
          damping={0}
          distance={6}
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
          <Experience
            onSectionClick={handleSectionClick}
            scrollBtn={scrollBtn}
          />
        </ScrollControls>
        {effects}

        <Rig />
      </Canvas>
      <Overlay />
      <ButtonGrid onButtonClick={handleButtonClick} />
      {selectedSection !== null && (
        <Slider sectionKey={selectedSection} onClose={handleCloseSlider} />
      )}
    </>
  );
}

export default App;
