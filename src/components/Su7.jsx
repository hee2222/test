/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 su7.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/su7.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[-0.757, 0.095, 1.145]} rotation={[-0.255, -0.362, -0.311]} scale={0.48}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <group name="Cylinder">
            <skinnedMesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials['Material.006']} skeleton={nodes.Cylinder_1.skeleton} />
            <skinnedMesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={materials['Material.005']} skeleton={nodes.Cylinder_2.skeleton} />
            <skinnedMesh name="Cylinder_3" geometry={nodes.Cylinder_3.geometry} material={materials['Material.001']} skeleton={nodes.Cylinder_3.skeleton} />
          </group>
        </group>
        <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials.pl10} rotation={[-0.21, -0.01, -0.316]} />
      </group>
    </group>
  )
}

useGLTF.preload('/su7.glb')
