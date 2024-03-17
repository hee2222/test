import React, { useState } from 'react';

export const ButtonGrid = ({ onButtonClick, targetIndex }) => {
  const handleClick = (index) => {
    onButtonClick(index); // 버튼 클릭 시 해당 버튼의 인덱스를 전달
  };

  const buttonLabels = [
    '전략/조직설계',
    '재무/회계',
    '마케팅',
    'HR',
    '구매/SCM',
    'IP',
    '법무',
  ];

  // 각 버튼을 렌더링
  const renderButtons = () => {
    return buttonLabels.map((label, index) => (
      <button
        key={index}
        onClick={() => handleClick(index + 1)}
        className={targetIndex - 1 === index ? 'active' : ''}
      >
        {label}
      </button>
    ));
  };

  return <div className="button-grid">{renderButtons()}</div>;
};

export default ButtonGrid;
