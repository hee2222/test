import { Environment, Sphere } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { Gradient, LayerMaterial, Texture } from 'lamina';
import { useRef } from 'react';

import { gsap } from 'gsap';

import * as THREE from 'three';

export const Background = ({ backgroundColors }) => {
  const start = 0.2;
  const end = -0.5;

  const gradientRef = useRef();
  const gradientEnvRef = useRef();

  const texture = useLoader(THREE.TextureLoader, './images/background.jpg');

  useFrame(() => {
    gradientRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );

    gradientEnvRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientEnvRef.current.colorD = new THREE.Color(
      backgroundColors.current.colorB
    );
  });

  return (
    <>
      <Sphere scale={[1000, 1000, 1000]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={'#ffffff'} side={THREE.BackSide}>
          {/* <Texture map={texture} /> */}
          {/* <Noise ref={gradientRef} offset={[10, 5, 8]} scale={1.3} /> */}
          <Gradient ref={gradientRef} axes={'y'} start={start} end={end} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Sphere
          scale={[500, 500, 500]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial color={'#ffffff'} side={THREE.BackSide}>
            <Gradient ref={gradientEnvRef} axes={'y'} start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
};
