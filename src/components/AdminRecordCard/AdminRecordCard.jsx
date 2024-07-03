import { InputGeneric } from "../InputGeneric/InputGeneric";
import { useDataContext } from "../../context/DataContext";
import { useFormHook } from "../../hooks/useFormHook";
import { MdSystemUpdateAlt } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useEffect, useState } from "react";

import "./AdminRecordCard.css";

export const AdminRecordCard = ({ record }) => {
  const { handleRemoveRecord, handleUpdateRecord } = useDataContext();
  const { input, setInput, handleInputChange } = useFormHook();
  const [disableInputs, setDisableInputs] = useState(true);

  useEffect(() => {
    setInput(record);
  }, [record]);

  const handleRemoveRecordButton = () => {
    handleRemoveRecord(record);
  };

  const handleUpdateButton = () => {
    setDisableInputs((previousState) => !previousState);
    if (!disableInputs) {
      handleUpdateRecord(input);
    }
  };

  return (
    <div className="admin-record-card">
      <div className="admin-record-buttons">
        <button className="admin-record-button" title="Update">
          <MdSystemUpdateAlt
            className={`admin-record-icon ${
              !disableInputs ? "confirm-update" : ""
            } `}
            onClick={handleUpdateButton}
          />
        </button>
        <button className="admin-record-button" title="Remove">
          <TiDeleteOutline
            onClick={handleRemoveRecordButton}
            className="admin-record-icon"
          />
        </button>
      </div>
      <div className="admin-record-card-container">
        <div className="admin-record-image">
          <img className="admin-record-image" src={input.image} alt="image" />
        </div>
        <form className="admin-record-inputs">
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.singer}
            label={"singer"}
            name={"singer"}
            type={"text"}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.song}
            label={"song name"}
            name={"song"}
            type={"text"}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.year}
            type={"number"}
            label={"year"}
            name={"year"}
            min={1930}
            max={2000}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.albumName}
            name={"albumName"}
            label={"album"}
            type={"text"}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.image}
            label={"image url"}
            name={"image"}
            type={"url"}
          />
          <InputGeneric
            disabled={disableInputs}
            value={input.link}
            label={"link"}
            name={"link"}
            type={"url"}
          />
          <div className="admin-record-input-container">
            <label htmlFor="description">description</label>
            <textarea
              onChange={handleInputChange}
              value={input.description}
              disabled={disableInputs}
              name="description"
              maxLength={1000}
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
