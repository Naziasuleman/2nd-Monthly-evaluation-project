// Button.js
import "./style.scss";
import PropTypes from "prop-types";

export const Button = ({ text, type, onClick, className }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
