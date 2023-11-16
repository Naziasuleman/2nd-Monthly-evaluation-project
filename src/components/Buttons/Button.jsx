// Button.js
import React from "react";
import "./style.scss";

export const Button = ({
  text,
  type,
  onClick,
  className,
  iconSrc,
  disabled,
  width,
}) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      width={width}
      disabled={disabled}
    >
      {iconSrc && <img src={iconSrc} alt="Icon" className="btn-icon" />}
      {text}
    </button>
  );
};
