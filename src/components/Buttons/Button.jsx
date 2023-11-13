// Button.js
import "./style.scss";

export const Button = ({ text, type, onClick, className }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
