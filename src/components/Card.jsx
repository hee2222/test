import React from 'react';

export const Card = ({ indexI, cardContent, index }) => {
  return (
    <div className="box">
      {indexI === 0 && <p className="card-sub-label">{`Level${index + 1}`}</p>}
      {indexI === 2 && (
        <p className="card-sub-label">
          {index == 0
            ? 'Essential'
            : index == 1
            ? 'Professional(Advanced)'
            : 'Expert'}
        </p>
      )}
      <p className="card-title">
        {indexI === 0 &&
          (index == 0 ? 'Essential' : index == 1 ? 'Professional' : 'Expert')}
        {indexI === 2 && `Lv.${index + 1}`}
        {(indexI === 3 || indexI === 5 || indexI === 7) &&
          (index == 0 ? '인증 특징' : '방법')}
      </p>
      <div className="card-desc-wrap">
        {cardContent.map((content, index) => (
          <p key={`card-list-${index}}`} className="card-desc">
            {content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
