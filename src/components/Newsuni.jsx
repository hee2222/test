import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Suni(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./models/newsuni.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions?.['Key.002Action']?.play() !== undefined) {
      actions?.['Key.002Action'].play();
    }
    if (actions?.['leg']?.play() !== undefined) {
      actions?.['leg'].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Wind"
          position={[-0.045, 23.336, -8.809]}
          rotation={[3.134, 0.002, 0.005]}
        />
        <group name="Armature" position={[0.013, -4.728, 0.739]} scale={3.977}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone005} />
          <skinnedMesh
            name="leg-left"
            geometry={nodes['leg-left'].geometry}
            material={materials.black}
            skeleton={nodes['leg-left'].skeleton}
          />
          <skinnedMesh
            name="leg-right"
            geometry={nodes['leg-right'].geometry}
            material={materials.black}
            skeleton={nodes['leg-right'].skeleton}
          />
        </group>
        <mesh
          name="rig"
          geometry={nodes.rig.geometry}
          material={materials.skyblue}
          position={[0.009, 10.995, 0.191]}
          rotation={[1.563, 0, 0]}
          scale={0.781}
        />
        <mesh
          name="face"
          geometry={nodes.face.geometry}
          material={materials.white}
          position={[0, 7.253, 6.618]}
          rotation={[1.524, 0, 0]}
          scale={[0.946, 0.946, 0.888]}
        />
        <mesh
          name="eyes"
          geometry={nodes.eyes.geometry}
          material={materials.black}
          position={[-2.063, 4.792, 5.937]}
          rotation={[1.449, 0, 0]}
          scale={1.09}
        />
        <mesh
          name="double-ring"
          geometry={nodes['double-ring'].geometry}
          material={materials.skyblue}
          position={[3.635, 2.044, 5.2]}
          rotation={[1.551, 0.01, -0.583]}
          scale={0.742}
        />
        <mesh
          name="light-center"
          geometry={nodes['light-center'].geometry}
          material={materials.skyblue}
          position={[0, -2.089, 5.375]}
          rotation={[-0.007, 0, 0]}
          scale={0.345}
        />
        <mesh
          name="light-right"
          geometry={nodes['light-right'].geometry}
          material={materials.white}
          position={[-1.205, -2.07, 5.096]}
          rotation={[-0.007, 0, 0]}
          scale={0.345}
        />
        <mesh
          name="light-eft"
          geometry={nodes['light-eft'].geometry}
          material={materials.white}
          position={[1.312, -2.07, 5.124]}
          rotation={[-0.007, 0, 0]}
          scale={0.345}
        />
        <mesh
          name="cover"
          geometry={nodes.cover.geometry}
          material={materials.yellow}
          position={[0, 4.504, -4.757]}
          rotation={[0.238, 0, 0]}
          scale={[7.613, 1.055, 0.376]}
        />
        <mesh
          name="body-last"
          geometry={nodes['body-last'].geometry}
          material={materials.red}
        />
        <mesh
          name="left-hand"
          geometry={nodes['left-hand'].geometry}
          material={materials.black}
          position={[-6.331, 5.025, 2.013]}
          rotation={[-2.886, 0, 0]}
          scale={1.2}
        />
        <mesh
          name="righ-hand"
          geometry={nodes['righ-hand'].geometry}
          material={materials.black}
          position={[5.642, -1.482, 1.194]}
          rotation={[3.134, 0, Math.PI]}
          scale={1.2}
        />
        <mesh
          name="cape-mdd-loop"
          geometry={nodes['cape-mdd-loop'].geometry}
          material={materials['yellow.002']}
          morphTargetDictionary={nodes['cape-mdd-loop'].morphTargetDictionary}
          morphTargetInfluences={nodes['cape-mdd-loop'].morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload('./models/newsuni.glb');
