import { Image, Text } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';

export const TextSection = ({ sectionKey, onClick, clickAble, ...props }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const handleClick = () => {
    if (onClick) {
      onClick(sectionKey); // 클릭된 섹션의 키 값을 전달
    }
  };
  const sectionConcept =
    sectionKey < 19
      ? '우주'
      : sectionKey < 19 + 6
      ? '하늘'
      : sectionKey < 19 + 6 + 28
      ? '도시'
      : '착지';
  if (clickAble) {
    return (
      <group ref={ref} {...props}>
        {/* <Text anchorY="top" fontSize={0.1} anchorX={'left'} lineHeight={1}>
          {sectionConcept}
        </Text>
        <Text fontSize={0.2} anchorX={'left'} lineHeight={1}>
          {sectionKey}
        </Text> */}
        <Image
          onClick={handleClick}
          onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
          onPointerOut={(event) => setHovered(false)}
          scale={1.5}
          url={`./images/info/img${sectionKey % 4}.png`}
          transparent
        />
      </group>
    );
  } else {
    return (
      <group {...props}>
        {/* <Text anchorY="top" fontSize={0.1} anchorX={'left'} lineHeight={1}>
          {sectionConcept}
        </Text>
        <Text fontSize={0.2} anchorX={'left'} lineHeight={1}>
          {sectionKey}
        </Text> */}
        <Image
          url={`./images/info/img${sectionKey % 4}.png`}
          scale={1.5}
          transparent
        />
      </group>
    );
  }
};
