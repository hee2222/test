import { Image } from '@react-three/drei';
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

  if (clickAble) {
    return (
      <>
        <Image
          ref={ref}
          onClick={handleClick}
          onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
          onPointerOut={(event) => setHovered(false)}
          scale={1.5}
          url={`./images/info/img${sectionKey}.png`}
          transparent
          {...props}
        />
      </>
    );
  } else {
    return (
      <Image
        url={`./images/info/img${sectionKey}.png`}
        scale={1.5}
        transparent
        {...props}
      />
    );
  }
};
