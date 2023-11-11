// InputField.js
import PropTypes from "prop-types";
import { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";

export const InputField = ({ label, type, required, name }) => {
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
        />
        {type === "password" && (
          <span
            className="input-group-text px-3 cursor-pointer bg-white border-start-0 text-gray-900"
            onClick={toggleShowPassword}
          >
            {showPassword ? <EyeSlash /> : <Eye />}
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
};
