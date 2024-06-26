/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 su1.glb 
*/

import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { fullOpacityOnApproach } from '../utils/fadeMaterial';

export function Su1({ props, curvePoints }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./su1.glb');
  const { actions } = useAnimations(animations, group);
  useMemo(() => {
    for (const key in materials) {
      if (materials.hasOwnProperty(key)) {
        const material = materials[key];
        material.transparent = true;
        material.onBeforeCompile = fullOpacityOnApproach;
      }
    }
  }, [materials]);

  useEffect(() => {
    if (actions?.['Scene']?.play() !== undefined) {
      actions?.['Scene'].play();
    }
  }, [actions]);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={2}
      position={[curvePoints.x + 3, curvePoints.y, curvePoints.z]}
    >
      <group name="Scene">
        <mesh
          name="Sphere001"
          geometry={nodes.Sphere001.geometry}
          material={materials.pl8}
          rotation={[-0.032, 0, -0.273]}
        />
        <group
          name="Cube001"
          position={[3.391, -0.922, 0.762]}
          rotation={[-0.091, -0.197, -0.278]}
          scale={0.477}
        >
          <mesh
            name="Cube001_1"
            geometry={nodes.Cube001_1.geometry}
            material={materials.Material}
            morphTargetDictionary={nodes['Cube001_1'].morphTargetDictionary}
            morphTargetInfluences={nodes['Cube001_1'].morphTargetInfluences}
          />
          <mesh
            name="Cube001_2"
            geometry={nodes.Cube001_2.geometry}
            material={materials['Material.006']}
            morphTargetDictionary={nodes['Cube001_2'].morphTargetDictionary}
            morphTargetInfluences={nodes['Cube001_2'].morphTargetInfluences}
          />
          <mesh
            name="Cube001_3"
            geometry={nodes.Cube001_3.geometry}
            material={materials['Material.008']}
            morphTargetDictionary={nodes['Cube001_3'].morphTargetDictionary}
            morphTargetInfluences={nodes['Cube001_3'].morphTargetInfluences}
          />
        </group>
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials['Material.005']}
          rotation={[-0.03, 0.015, 0.002]}
          morphTargetDictionary={nodes['Plane001'].morphTargetDictionary}
          morphTargetInfluences={nodes['Plane001'].morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload('./su1.glb');
