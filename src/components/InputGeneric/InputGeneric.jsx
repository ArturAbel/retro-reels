import "./InputGeneric.css";

export const InputGeneric = ({
  handleInputChange,
  disabled,
  value,
  label,
  type,
  name,
}) => {
  return (
    <div className="admin-generic-input-container">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleInputChange}
        disabled={disabled}
        value={value}
        name={name}
        type={type}
      />
    </div>
  );
};
