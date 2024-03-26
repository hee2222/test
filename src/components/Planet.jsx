/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/planet.glb 
*/

import React, { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import { fullOpacityOnApproach } from '../utils/fadeMaterial';

export function Planet({ curvePoints, props }) {
  const { nodes, materials } = useGLTF('./models/planet.glb');
  useMemo(() => {
    for (const key in materials) {
      if (materials.hasOwnProperty(key)) {
        const material = materials[key];
        material.transparent = true;
        material.onBeforeCompile = fullOpacityOnApproach;
      }
    }
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <mesh
        scale={10}
        position={[0, -4, 0]}
        geometry={nodes.gr.geometry}
        material={materials.pl11}
      />
      {/* <group
        scale={10}
        position={[curvePoints[1].x + 4, curvePoints[1].y, curvePoints[1].z]}
      >
        <mesh
          geometry={nodes.Circle002.geometry}
          material={materials['Material.002']}
        />
        <mesh geometry={nodes.Circle002_1.geometry} material={materials.pl8} />
      </group> */}
      {/* <mesh
        scale={10}
        position={[curvePoints[2].x - 5, curvePoints[2].y, curvePoints[2].z]}
        geometry={nodes.wh2.geometry}
        material={materials.pl4}
      /> */}

      {/* <mesh
        position={[curvePoints[3].x + 5, curvePoints[3].y, curvePoints[3].z]}
        geometry={nodes.bl.geometry}
        material={materials.pl2}
        rotation={[-3.024, 0.138, 0.622]}
        scale={10}
      /> */}
      {/* <mesh
        scale={20}
        position={[curvePoints[4].x - 5, curvePoints[4].y, curvePoints[4].z]}
        geometry={nodes.br.geometry}
        material={materials.pl1}
        rotation={[-3.105, 0.145, 0.484]}
      /> */}
      {/* <mesh
        position={[curvePoints[5].x + 4, curvePoints[5].y, curvePoints[5].z]}
        geometry={nodes.wh.geometry}
        material={materials.pl6}
        scale={5}
      /> */}
      {/* <group
        rotation={[0.141, 0.143, 0.357]}
        scale={10}
        position={[
          curvePoints[6].x - 8,
          curvePoints[6].y,
          curvePoints[6].z - 20,
        ]}
      >
        <mesh
          geometry={nodes.Circle003.geometry}
          material={materials['Material.001']}
        />
        <mesh geometry={nodes.Circle003_1.geometry} material={materials.pl9} />
      </group> */}
      {/* <group
        scale={5}
        position={[curvePoints[7].x + 5, curvePoints[7].y, curvePoints[7].z]}
      >
        <mesh geometry={nodes.Sphere008.geometry} material={materials.pl7} />
        <mesh
          geometry={nodes.Sphere008_1.geometry}
          material={materials['Material.003']}
        />
      </group> */}
      {/* <mesh
        position={[curvePoints[8].x - 4, curvePoints[8].y, curvePoints[8].z]}
        geometry={nodes.sb.geometry}
        material={materials.pl3}
        scale={16}
      />
      <mesh
        position={[curvePoints[9].x + 4, curvePoints[9].y, curvePoints[9].z]}
        geometry={nodes.ye.geometry}
        material={materials.pl10}
        scale={10}
      /> */}

      {/* <mesh
        position={[
          curvePoints[1].x - 10,
          curvePoints[1].y + 10,
          curvePoints[1].z + 10,
        ]}
        geometry={nodes.ye.geometry}
        material={materials.pl10}
        scale={20}
      />

      <mesh
        position={[
          curvePoints[4].x - 40,
          curvePoints[4].y + 20,
          curvePoints[4].z - 5,
        ]}
        geometry={nodes.gr.geometry}
        material={materials.pl11}
        scale={30}
      />
      <group
        position={[
          curvePoints[5].x + 45,
          curvePoints[5].y + 10,
          curvePoints[5].z - 5,
        ]}
        scale={20}
      >
        <mesh
          geometry={nodes.Circle005.geometry}
          material={materials.Material}
        />
        <mesh geometry={nodes.Circle005_1.geometry} material={materials.pl1} />
      </group>

      <mesh
        position={[
          curvePoints[6].x - 44,
          curvePoints[6].y + 20,
          curvePoints[6].z - 5,
        ]}
        geometry={nodes.wh2.geometry}
        material={materials.pl4}
        scale={30}
      /> */}
    </group>
  );
}

useGLTF.preload('./models/planet.glb');
