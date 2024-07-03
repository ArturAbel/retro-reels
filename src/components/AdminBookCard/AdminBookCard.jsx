import { InputGeneric } from "../InputGeneric/InputGeneric";
import { MdSystemUpdateAlt } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

import "./AdminBookCard.css";
import { useDataContext } from "../../context/DataContext";
import { useFormHook } from "../../hooks/useFormHook";
import { useEffect, useState } from "react";

export const AdminBookCard = ({ book }) => {
  const { handleRemoveBook, handleUpdateBook } = useDataContext();
  const { input, setInput, handleInputChange } = useFormHook();
  const [disableInputs, setDisableInputs] = useState(true);
  const [imageArray, setImageArray] = useState("", "");

  useEffect(() => {
    setInput(book);
    setImageArray([book.images[0], book.images[1]]);
  }, [book]);

  const handleRemoveRecordButton = () => {
    handleRemoveBook(book);
  };

  const handleUpdateButton = () => {
    setDisableInputs((previousState) => !previousState);
    if (!disableInputs) {
      handleUpdateBook({ ...input, images: imageArray });
    }
  };

  const handleImageArray = (e) => {
    const { value, name } = e.target;
    setImageArray((previous) => {
      const newArray = [...previous];
      newArray[name] = value;
      return newArray;
    });
  };

  return (
    <div className="admin-book-card">
      <div className="admin-book-buttons">
        <button className="admin-book-button" title="Update">
          <MdSystemUpdateAlt
            className={`admin-book-icon ${
              !disableInputs ? "confirm-update" : ""
            } `}
            onClick={handleUpdateButton}
          />
        </button>
        <button className="admin-book-button" title="Remove">
          <TiDeleteOutline
            onClick={handleRemoveRecordButton}
            className="admin-book-icon"
          />
        </button>
      </div>
      <div className="admin-book-card-container">
        <div className="admin-book-image">
          <img className="admin-book-image" src={book.images[0]} alt="image" />
        </div>
        <form className="admin-book-inputs">
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.title}
            label={"title"}
            name={"title"}
            type={"text"}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.subtitle}
            label={"subtitle"}
            name={"subtitle"}
            type={"text"}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.pages}
            type={"number"}
            label={"pages"}
            name={"pages"}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.genre}
            label={"genre"}
            name={"genre"}
            type={"text"}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.author}
            label={"author"}
            name={"author"}
            type={"text"}
          />
          <InputGeneric
            handleInputChange={handleImageArray}
            disabled={disableInputs}
            label={"front cover image"}
            value={imageArray[0]}
            type={"url"}
            name={"0"}
          />
          <InputGeneric
            handleInputChange={handleImageArray}
            disabled={disableInputs}
            label={"back cover image"}
            value={imageArray[1]}
            type={"url"}
            name={"1"}
          />
          <div className="admin-book-input-container">
            <label htmlFor="fact">fact</label>
            <textarea
              className="admin-book-textarea-fact"
              onChange={handleInputChange}
              disabled={disableInputs}
              value={input.fact}
              type="text"
              name="fact"
            />
          </div>
          <div className="admin-book-input-container">
            <label htmlFor="summary">summary</label>
            <textarea
              className="admin-book-textarea-summary"
              onChange={handleInputChange}
              disabled={disableInputs}
              value={input.summary}
              name="summary"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
