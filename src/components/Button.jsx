import React from "react";

const Button = ({ children, backgroundColor, type }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: backgroundColor }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
