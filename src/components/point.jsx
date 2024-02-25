import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const generateRandomPoint = (range) => {
  const y = THREE.MathUtils.randFloat(-120, 120);
  const z = THREE.MathUtils.randFloat(-range, range);
  return [y, z];
};

export const CustomPoints = ({ numPoints, range }) => {
  const pointsRef = useRef();
  const spacing = 1;

  useEffect(() => {
    const positions = [];
    for (let i = 0; i < numPoints; i++) {
      const x = i * spacing - (numPoints * spacing) / 2; // 균등한 간격으로 설정
      const [y, z] = generateRandomPoint(range);
      positions.push(x, y, z);
    }

    pointsRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(positions), 3)
    );
  }, [numPoints, range]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry" />
      <pointsMaterial
        attach="material"
        // color={'white'}
        size={1.5}
        sizeAttenuation={false}
      />
    </points>
  );
};
