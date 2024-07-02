import "./InputGeneric.css";

export const InputGeneric = ({ label, type, name, value, disable }) => {
  return (
    <div className="admin-generic-input-container">
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} value={value} />
    </div>
  );
};
