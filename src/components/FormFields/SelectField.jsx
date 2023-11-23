export const SelectField = ({ label, required }) => {
  return (
    <>
      <div>
        <label className="form-label">
          {label} {required ? "*" : ""}
        </label>
        <select className="form-select text-gray-500 fw-500">
          <option className="text-gray-500 fw-500" selected>
            Select Company
          </option>
          <option value="1">ABC company</option>
          <option value="2">ABC company</option>
        </select>
      </div>
    </>
  );
};
