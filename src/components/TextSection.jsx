import { Text } from '@react-three/drei';

import { useRef, useState, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { fullOpacityOnApproach } from '../utils/fadeMaterial';
import * as THREE from 'three';

export const TextSection = ({
  sceneOpacity,
  sectionKey,
  onClick,
  clickAble,
  ...props
}) => {
  const ref = useRef();
  const materialRef = useRef();

  const [hovered, setHovered] = useState(false);
  useFrame(() => {
    materialRef.current.opacity = sceneOpacity.current;
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const handleClick = () => {
    if (onClick) {
      onClick(sectionKey); // 클릭된 섹션의 키 값을 전달
    }
  };

  let imgUrl = `./images/info/img${sectionKey % 7}.png`;
  const texture = useLoader(THREE.TextureLoader, imgUrl);

  if (clickAble) {
    return (
      <group {...props}>
        {/* <Text anchorY="top" fontSize={0.1} anchorX={'left'} lineHeight={1}>
          {sectionConcept}
        </Text>
        <Text fontSize={0.2} anchorX={'left'} lineHeight={1}>
          {sectionKey}
        </Text> */}
        <mesh>
          <planeGeometry attach="geometry" args={[1.5, 1.5]} />
          <meshStandardMaterial
            attach="material"
            map={texture}
            ref={materialRef}
            transparent
            onBeforeCompile={fullOpacityOnApproach}
          />
        </mesh>

        <group position-z={0.1} position-y={-1}>
          <mesh
            onClick={handleClick}
            onPointerOver={(event) => (
              event.stopPropagation(), setHovered(true)
            )}
            onPointerOut={(event) => setHovered(false)}
            scale={hovered ? 1.1 : 1}
          >
            <planeGeometry attach="geometry" args={[1, 0.3]} />
            <meshStandardMaterial
              color={hovered ? 'hotpink' : 'red'}
              attach="material"
              transparent
              ref={materialRef}
              onBeforeCompile={fullOpacityOnApproach}
            />
          </mesh>
          <Text
            fontSize={0.1}
            anchorX={'center'}
            lineHeight={1.2}
            position-z={0.01}
            transparent
            ref={materialRef}
            onBeforeCompile={fullOpacityOnApproach}
          >
            자세히보기
          </Text>
        </group>
      </group>
    );
  } else {
    return (
      <group {...props}>
        <mesh ref={ref}>
          <planeGeometry attach="geometry" args={[1.5, 1.5]} />
          <meshStandardMaterial
            attach="material"
            map={texture}
            transparent
            ref={materialRef}
            onBeforeCompile={fullOpacityOnApproach}
          />
        </mesh>
      </group>
    );
  }
};
