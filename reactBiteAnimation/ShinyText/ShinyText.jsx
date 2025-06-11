import React from "react";

const ShinyText = ({ text, speed = 2.5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={className}
      style={{
        position: "relative",
        color: "black",
        overflow: "hidden", 
        display: "inline-block",
      }}
    >
      {text}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: "-150%",
          width: "150%",
          height: "100%",
           background:
            "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.2) 60%, transparent 65%)",
          animationName: "shine",
          animationDuration: animationDuration,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          pointerEvents: "none", // allow clicks through the shine
          mixBlendMode: "screen", // blend so it lightens text below
        }}
      />

     <style>{`
        @keyframes shine {
          0% {
            left: -100%;
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;
