import "./InputAdd.css";

export const InputAdd = ({
  placeholder,
  onChange,
  value,
  name,
  type,
  min,
  max,
}) => {
  return (
    <div className="add-input-container">
      <input
        className="add-input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        max={max}
        min={min}
        required
      />
    </div>
  );
};
