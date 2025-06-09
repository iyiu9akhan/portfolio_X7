import React from 'react';
import './PaintButton.css';

const PaintButton = () => {
  return (
    <div className="drip-container">
      <button className="paint-button">
        <span className="button-text">Let’s Collaborate</span>
        <div className="drip drip-1"></div>
        <div className="drip drip-2"></div>
        <div className="drip drip-3"></div>
        <div className="drip drip-4"></div>
        <div className="drip drip-5"></div>
      </button>

      {/* Gooey effect filter */}
      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </div>
  );
};

export default PaintButton;
