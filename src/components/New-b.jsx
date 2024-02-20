/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/new-b.glb 
*/

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import {
  fadeOnBeforeCompile,
  normalfadeOnBeforeCompileFlat,
} from '../utils/fadeMaterial';

export function B({ sceneOpacity, ...props }) {
  const { nodes, materials } = useGLTF('./models/new-b.glb');
  // const materialRef = useRef();

  // useFrame(() => {
  //   materialRef.current.opacity = sceneOpacity.current;
  // });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane001.geometry}>
        <meshStandardMaterial
          // ref={materialRef}
          // color={'white'}
          transparent
          envMapIntensity={2}
          onBeforeCompile={fadeOnBeforeCompile}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('./models/new-b.glb');