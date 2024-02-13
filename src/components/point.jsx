import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const generateRandomPoint = (range) => {
  const x = THREE.MathUtils.randFloat(-range, range);
  const y = THREE.MathUtils.randFloat(-range, range);
  const z = THREE.MathUtils.randFloat(-range, range);
  return [x, y, z];
};

export const CustomPoints = ({ numPoints, range }) => {
  const pointsRef = useRef();

  useEffect(() => {
    const positions = [];
    for (let i = 0; i < numPoints; i++) {
      const point = generateRandomPoint(range);
      positions.push(...point);
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
        color={'white'}
        size={2}
        sizeAttenuation={false}
      />
    </points>
  );
};
