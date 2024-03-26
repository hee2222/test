import React, { useState } from 'react';
import { Carousel } from 'react-carousel3';

const style = {
  width: 365,
  height: 200,
};
export const Carousel1 = ({ onClickPlanet }) => {
  const [clickPlanet, setClickPlanet] = useState(0);
  const clickSetNum = (num) => {
    setClickPlanet(num);
    onClickPlanet(num);
  };

  return (
    <div
      style={{
        margin: '0px',
        marginRight: '100px',
        padding: '0px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Carousel
        height={300}
        width={1200}
        yOrigin={0}
        xOrigin={0}
        xRadius={600}
        autoPlay={false}
      >
        {Array.from({ length: 8 }, (_, index) => (
          <div className="button-card" style={style} key={`planet${index + 1}`}>
            <img
              src={`/images/intro${index + 1}.png`}
              alt=""
              onClick={() => clickSetNum(index)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
