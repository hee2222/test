import { Text } from '@react-three/drei';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import {
  fullOpacityOnApproach,
  fadeOnBeforeCompileFlat,
} from '../utils/fadeMaterial';
import * as THREE from 'three';

export const TextSection = ({
  sceneOpacity,
  sectionKey,
  onClick,
  ...props
}) => {
  const ref = useRef();
  const materialRef = useRef();

  const textTitle = useMemo(
    () => [
      '전체 직무 안내',
      '공통 Lv. 특징',
      '전략/조직설계',
      '재무/회계',
      '마케팅',
      'HR',
      '구매/SCM',
      'IP',
      '법무',
    ],
    []
  );

  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    materialRef.current.opacity = 1;
  }, []);

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

  return (
    <group {...props}>
      <Text
        fontSize={0.2}
        color={'white'}
        anchorY={'center'}
        anchorX={'center'}
        lineHeight={1.2}
        position-z={0.01}
      >
        {textTitle[sectionKey]}
        <meshStandardMaterial
          transparent
          ref={materialRef}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
      {/* <mesh>
          <planeGeometry attach="geometry" args={[1.5, 1.5]} />
          <meshStandardMaterial
            attach="material"
            map={texture}
            ref={materialRef}
            transparent
            onBeforeCompile={fullOpacityOnApproach}
          />
        </mesh> */}
      <group position-z={0.1} position-y={-0.5}>
        <mesh
          onClick={handleClick}
          onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
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
          color={'white'}
          anchorX={'center'}
          lineHeight={1.2}
          position-z={0.01}
        >
          자세히보기
          <meshStandardMaterial
            transparent
            ref={materialRef}
            onBeforeCompile={fullOpacityOnApproach}
          />
        </Text>
      </group>
    </group>
  );
};
