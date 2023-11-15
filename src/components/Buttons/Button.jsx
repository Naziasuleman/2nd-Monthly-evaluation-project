// Button.js

import "./style.scss";

export const Button = ({ text, type, onClick, className, iconSrc }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {iconSrc && <img src={iconSrc} alt="Icon" className="btn-icon" />}
      {text}
    </button>
  );
};
