import React from "react";

const ShinyCard = ({ children, className = "", speed = 5, rgba = "" }) => {
  const animationDuration = `${speed}s`;
  return (
    <div
      className={`bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_60%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat animate-shine ${className}`}
      style={{ animationDirection: animationDuration }}
    >
      {children}
    </div>
  );
};

export default ShinyCard;
