import { Text } from '@react-three/drei';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { fadeOnBeforeCompileFlat } from '../utils/fadeMaterial';
import * as THREE from 'three';

export const TextSection = ({
  sceneOpacity,
  sectionKey,
  onClick,
  ...props
}) => {
  const materialRefTitle = useRef();
  const materialRefSubtitle = useRef();
  const materialRefDescription = useRef();

  const materialRefTitle1 = useRef();
  const materialRefSubtitle1 = useRef();

  const textTitle = useMemo(
    () => [
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
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const handleClick = () => {
    if (onClick) {
      onClick(sectionKey); // 클릭된 섹션의 키 값을 전달
    }
  };

  useFrame(() => {
    if (materialRefTitle.current) {
      materialRefTitle.current.opacity = sceneOpacity.current;
    }
    if (materialRefSubtitle.current) {
      materialRefSubtitle.current.opacity = sceneOpacity.current;
    }
    if (materialRefDescription.current) {
      materialRefDescription.current.opacity = sceneOpacity.current;
    }
    if (materialRefTitle1.current) {
      materialRefTitle1.current.opacity = sceneOpacity.current;
    }
    if (materialRefSubtitle1.current) {
      materialRefSubtitle1.current.opacity = sceneOpacity.current;
    }
  });
  // const font = useFont('./fonts/Pretendard-Medium.ttf');

  return (
    <group {...props}>
      <Text
        fontSize={0.2}
        color={'white'}
        anchorY={'center'}
        anchorX={'center'}
        lineHeight={1.2}
        position-y={0.4}
        position-z={-0.01}
        font={'./fonts/Pretendard-Medium.ttf'}
      >
        {`#TOTAL 0${sectionKey + 1}/07`}
        <meshStandardMaterial
          color={'white'}
          ref={materialRefTitle}
          transparent
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>

      <Text
        fontSize={0.5}
        color={'white'}
        anchorY={'center'}
        anchorX={'center'}
        lineHeight={1.2}
        position-z={-0.02}
        font={'./fonts/Pretendard-Medium.ttf'}
      >
        {textTitle[sectionKey]}
        <meshStandardMaterial
          transparent
          ref={materialRefTitle1}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>

      <Text
        fontSize={0.2}
        color={'white'}
        anchorY={'center'}
        anchorX={'center'}
        lineHeight={1.2}
        position-y={-0.8}
        position-z={0.01}
        font={'./fonts/Pretendard-Medium.ttf'}
      >
        Guide to the Whole job
        <meshStandardMaterial
          transparent
          ref={materialRefSubtitle}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
      <group position-y={-1.6}>
        <mesh
          onClick={handleClick}
          onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
          onPointerOut={(event) => setHovered(false)}
        >
          <planeGeometry attach="geometry" args={[2, 0.6]} />
          <meshStandardMaterial
            color={hovered ? 'hotpink' : 'red'}
            attach="material"
            transparent
            ref={materialRefSubtitle1}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </mesh>
        <Text
          fontSize={0.2}
          color={'white'}
          anchorX={'center'}
          lineHeight={1.2}
          position-z={0.01}
          font={'./fonts/Pretendard-Medium.ttf'}
        >
          자세히보기
          <meshStandardMaterial
            transparent
            ref={materialRefDescription}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      </group>
    </group>
  );
};
