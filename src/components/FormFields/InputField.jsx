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
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="input-group-lg mb-12">
      <label className="mb-12 form-label">
        {label} {required ? "*" : ""}
      </label>
      <div className="input-group">
        <input
          type={showPassword ? "text" : type}
          className="form-control"
          required={required}
          name={name}
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
};
