// InputField.js
import PropTypes from "prop-types";
import { useState } from "react";
import { EyeSlash, Eye } from "react-bootstrap-icons";

export const InputField = ({
  label,
  type,
  required,
  name,
  defaultValue,
  disabled,
  iconImage,
  placeholder,

  // Add inputGroupSize prop
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="input-group-lg">
      <label className="mb-12 form-label">
        {label} {required ? "*" : ""}
      </label>
      <div className="input-group">
        {iconImage && (
          <span className="input-group-text bg-white border border-end-0 text-gray-900">
            <img src={iconImage} alt="icon" className="icon-image" />
          </span>
        )}
        <input
          type={showPassword ? "text" : type}
          className={`form-control ${
            iconImage ? "border border-start-0" : ""
          }  }`}
          required={required}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        {type === "password" && (
          <span
            className="input-group-text px-3 cursor-pointer bg-white border-start-0 text-gray-900"
            onClick={toggleShowPassword}
          >
            {showPassword ? <Eye /> : <EyeSlash />}
          </span>
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.undefined]).isRequired,
  required: PropTypes.bool,
  name: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  iconImage: PropTypes.string,
  inputGroupSize: PropTypes.string,
  placeholder: PropTypes.string, // Define prop type for inputGroupSize
};
