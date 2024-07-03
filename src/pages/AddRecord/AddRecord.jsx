import { InputAdd } from "../../components/InputAdd/InputAdd";
import { useDataContext } from "../../context/DataContext";
import { useFormHook } from "../../hooks/useFormHook";
import { useNavigate } from "react-router-dom";

import "./AddRecord.css";

export const AddRecord = () => {
  const { input, handleInputChange } = useFormHook();
  const { handleAddRecord } = useDataContext();
  const navigate = useNavigate();

  const handleAddRecordButton = (e) => {
    e.preventDefault();
    handleAddRecord(input);
    navigate("/admin/admin-records");
  };

  return (
    <section className="section-add-record">
      <h4 className="add-record-title">add record</h4>
      <form onSubmit={handleAddRecordButton} className="add-record-form">
        <div className="add-record-form-div">
          <div>
            <InputAdd
              onChange={handleInputChange}
              placeholder={"singer"}
              value={input.singer || ""}
              name={"singer"}
              type={"text"}
            />
            <InputAdd
              onChange={handleInputChange}
              placeholder={"song"}
              value={input.song || ""}
              name={"song"}
              type={"text"}
            />
            <InputAdd
              onChange={handleInputChange}
              placeholder={"year"}
              value={input.year || ""}
              type={"number"}
              name={"year"}
              max={2000}
              min={1930}
            />
            <InputAdd
              onChange={handleInputChange}
              placeholder={"album name"}
              value={input.albumName || ""}
              name={"albumName"}
              type={"text"}
            />
          </div>
          <div>
            <InputAdd
              onChange={handleInputChange}
              placeholder={"image URL"}
              value={input.image || ""}
              name={"image"}
              type={"url"}
            />
            <InputAdd
              onChange={handleInputChange}
              placeholder={"link"}
              value={input.link || ""}
              name={"link"}
              type={"url"}
            />
            <textarea
              onChange={handleInputChange}
              className="add-input-textarea"
              value={input.description || ""}
              placeholder="description"
              name="description"
            />
          </div>
        </div>
        <button type="submit" className="button add-record-button">
          add
        </button>
      </form>
    </section>
  );
};
