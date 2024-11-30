import React from "react";

const Btn = ({ children, type = "button", classname = "", ...props }) => {
  return (
    <button
      type={type}
      className={`p-2 bg-green text-base font-bold text-white ${classname}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Btn;
