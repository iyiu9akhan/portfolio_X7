import React from "react";
import "./PaintButton.css";

const PaintButton = ({ children, className="", color="" }) => {
  return (
    <div className="drip-container">
      <button
        className={`paint-button ${className}`}
        style={{ backgroundColor: color }}
      >
        <span className={`button-text ${className} capitalize`}>
          {children}
        </span>
        <div className="drip drip-1" style={{ backgroundColor: color }}></div>
        <div className="drip drip-2" style={{ backgroundColor: color }}></div>
        <div className="drip drip-3" style={{ backgroundColor: color }}></div>
        <div className="drip drip-4" style={{ backgroundColor: color }}></div>
        <div className="drip drip-5" style={{ backgroundColor: color }}></div>
      </button>

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
