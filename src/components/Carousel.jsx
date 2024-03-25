import React from 'react';
import { Carousel } from 'react-carousel3';

const style = {
  width: 365,
  height: 200,
};
export const Carousel1 = () => (
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
      <div className="button-card" style={style} key="planet1">
        <img src="/images/intro1.png" alt="" />
      </div>
      <div className="button-card" style={style} key="planet2">
        <img src="/images/intro2.png" alt="" />
      </div>
      <div className="button-card" style={style} key="planet3">
        <img src="/images/intro3.png" alt="" />
      </div>
      <div className="button-card" style={style} key="planet4">
        <img src="/images/intro4.png" alt="" />
      </div>
      <div className="button-card" style={style} key="planet5">
        <img src="/images/intro5.png" alt="" />
      </div>
      <div className="button-card" style={style} key="planet6">
        <img src="/images/intro6.png" alt="" />
      </div>
      <div className="button-card" style={style} key="planet7">
        <img src="/images/intro7.png" alt="" />
      </div>
      <div className="button-card" style={style} key="planet8">
        <img src="/images/intro7.png" alt="" />
      </div>
    </Carousel>
  </div>
);
