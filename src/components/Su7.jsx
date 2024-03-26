/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 su7.glb 
*/

import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { fullOpacityOnApproach } from '../utils/fadeMaterial';

export function Su7({ props, curvePoints }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./su7.glb');
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
      position={[curvePoints.x + 4, curvePoints.y, curvePoints.z]}
    >
      <group name="Scene">
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials.pl10}
          rotation={[-0.21, -0.01, -0.316]}
        >
          <group
            name="Armature001"
            position={[-0.984, -0.37, -0.888]}
            rotation={[3.016, -1.009, 3.037]}
            scale={0.411}
          >
            <primitive object={nodes.Bone} />
            <primitive object={nodes.Bone001} />
            <group name="Cylinder001">
              <skinnedMesh
                name="Cylinder001_1"
                geometry={nodes.Cylinder001_1.geometry}
                material={materials['Material.006']}
                skeleton={nodes.Cylinder001_1.skeleton}
              />
              <skinnedMesh
                name="Cylinder001_2"
                geometry={nodes.Cylinder001_2.geometry}
                material={materials['Material.005']}
                skeleton={nodes.Cylinder001_2.skeleton}
              />
              <skinnedMesh
                name="Cylinder001_3"
                geometry={nodes.Cylinder001_3.geometry}
                material={materials['Material.001']}
                skeleton={nodes.Cylinder001_3.skeleton}
              />
            </group>
          </group>
          <group
            name="Empty"
            position={[0.694, 0.053, 0.624]}
            rotation={[0.058, -0.051, 0.123]}
            scale={0.78}
          >
            <group
              name="Armature"
              position={[-0.757, 0.095, 1.145]}
              rotation={[-0.499, -1.043, -0.363]}
              scale={0.48}
            >
              <primitive object={nodes.Bone_1} />
              <primitive object={nodes.Bone001_1} />
              <group name="Cylinder">
                <skinnedMesh
                  name="Cylinder_1"
                  geometry={nodes.Cylinder_1.geometry}
                  material={materials['Material.006']}
                  skeleton={nodes.Cylinder_1.skeleton}
                />
                <skinnedMesh
                  name="Cylinder_2"
                  geometry={nodes.Cylinder_2.geometry}
                  material={materials['Material.005']}
                  skeleton={nodes.Cylinder_2.skeleton}
                />
                <skinnedMesh
                  name="Cylinder_3"
                  geometry={nodes.Cylinder_3.geometry}
                  material={materials['Material.001']}
                  skeleton={nodes.Cylinder_3.skeleton}
                />
              </group>
            </group>
          </group>
          <group
            name="Empty001"
            position={[0.122, 0.064, -0.358]}
            rotation={[-2.987, 0.581, 2.736]}
            scale={0.78}
          >
            <group
              name="Armature002"
              position={[-0.757, 0.095, 1.145]}
              rotation={[0.601, -0.968, 0.593]}
              scale={0.36}
            >
              <primitive object={nodes.Bone_2} />
              <primitive object={nodes.Bone001_2} />
              <group name="Cylinder002">
                <skinnedMesh
                  name="Cylinder002_1"
                  geometry={nodes.Cylinder002_1.geometry}
                  material={materials['Material.006']}
                  skeleton={nodes.Cylinder002_1.skeleton}
                />
                <skinnedMesh
                  name="Cylinder002_2"
                  geometry={nodes.Cylinder002_2.geometry}
                  material={materials['Material.005']}
                  skeleton={nodes.Cylinder002_2.skeleton}
                />
                <skinnedMesh
                  name="Cylinder002_3"
                  geometry={nodes.Cylinder002_3.geometry}
                  material={materials['Material.001']}
                  skeleton={nodes.Cylinder002_3.skeleton}
                />
              </group>
            </group>
          </group>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('./su7.glb');
