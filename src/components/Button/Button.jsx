import React from "react";

const Button = ({ onClick, children, backgroundColor, type, marginTop, border, color }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: backgroundColor, marginTop: marginTop, border: border, color: color }}
      type={type}
      onClick = {onClick}
    >
      {children}
    </button>
  );
};

export default Button;
