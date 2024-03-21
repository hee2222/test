/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 su4.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/su4.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[0.026, -0.181, 0.53]} scale={0.723}>
          <mesh name="Dummy_37" geometry={nodes.Dummy_37.geometry} material={materials['Material.011']} position={[0.211, 0.454, 0.058]} scale={0}>
            <mesh name="Base_haircut_20" geometry={nodes.Base_haircut_20.geometry} material={materials['20']} position={[0, 0, -0.001]} rotation={[Math.PI / 2, 0, 0]} scale={0.012} />
            <mesh name="glasses_20" geometry={nodes.glasses_20.geometry} material={materials['glasses.002']} position={[0, 0, -0.001]} rotation={[Math.PI / 2, 0, 0]} scale={0.012} />
            <mesh name="Sphere002" geometry={nodes.Sphere002.geometry} material={materials['Material.001']} position={[0, -15.292, -10.673]} scale={[38.633, 24.918, 24.953]}>
              <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} position={[0, 0, 0.069]} scale={[6.58, 10.201, 10.187]} />
              <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.006']} position={[-0.001, 0.716, 0.828]} scale={[6.463, 10.02, 10.006]} />
            </mesh>
          </mesh>
          <mesh name="Dummy_37001" geometry={nodes.Dummy_37001.geometry} material={materials['Material.012']} position={[-0.242, 0.405, 0.048]} scale={0}>
            <group name="Base_Haircut_38" position={[-2, 0, 0]} scale={0}>
              <mesh name="Cube051" geometry={nodes.Cube051.geometry} material={materials.Ribbon} />
              <mesh name="Cube051_1" geometry={nodes.Cube051_1.geometry} material={materials.Anna_hairStrand} />
            </group>
            <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['Material.001']} position={[-2, 0, 0]} scale={0}>
              <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={nodes.Cylinder003.material} position={[-2, 0, 0]} scale={0} />
              <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.009']} position={[-2, 0, 0]} scale={0} />
            </mesh>
          </mesh>
          <mesh name="Gear" geometry={nodes.Gear.geometry} material={materials['Material.008']} position={[0.004, 0.345, 0.256]} scale={0} />
          <mesh name="Gear001" geometry={nodes.Gear001.geometry} material={materials['Material.008']} position={[0.256, 0.372, 0.026]} scale={0} />
          <mesh name="Gear002" geometry={nodes.Gear002.geometry} material={materials['Material.008']} position={[-0.244, 0.38, 0.018]} scale={0} />
          <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.001']} position={[0.004, 0.436, 0.256]} scale={0}>
            <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={nodes.Cylinder002.material} position={[0.25, 1, 8]} scale={0} />
            <mesh name="Dummy_40" geometry={nodes.Dummy_40.geometry} material={materials['Material.002']} position={[0.25, 1, 8]} scale={0}>
              <mesh name="Base_haircut_21" geometry={nodes.Base_haircut_21.geometry} material={materials['21']} position={[0.25, 1, 8]} scale={0} />
            </mesh>
            <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.004']} position={[0.25, 1, 8]} scale={0} />
          </mesh>
        </group>
        <mesh name="Sphere003" geometry={nodes.Sphere003.geometry} material={materials.pl9} rotation={[Math.PI, -0.026, Math.PI]}>
          <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.007']} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/su4.glb')
