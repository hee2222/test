import { ScrollControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Experience } from './components/Experience';
import { easing } from 'maath';
import { Overlay } from './components/Overlay';
import { Slider } from './components/Slider';
import { usePlay } from './contexts/Play';

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

  const handleSectionClick = (sectionKey) => {
    setSelectedSection(sectionKey);
  };

  const handleCloseSlider = () => {
    setSelectedSection(null);
  };
  // console.log(play);
  return (
    <>
      <Canvas>
        <color attach="background" args={['#ececec']} />
        <ScrollControls
          pages={play && !end ? 100 : 0}
          damping={0.1}
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
          {/* <fog attach="fog" color="hotpink" near={1} far={5} /> */}
          <Experience onSectionClick={handleSectionClick} />
        </ScrollControls>
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
