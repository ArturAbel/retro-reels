import { InputAdd } from "../../components/InputAdd/InputAdd";
import { useDataContext } from "../../context/DataContext";
import { useFormHook } from "../../hooks/useFormHook";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./AddBook.css";

export const AddBook = () => {
  const { input, handleInputChange } = useFormHook();
  const [imageArray, setImageArray] = useState(["", ""]);
  const { handleAddBook } = useDataContext();
  const navigate = useNavigate();

  const handleAddBookButton = (e) => {
    e.preventDefault();
    handleAddBook({ ...input, images: imageArray });
    navigate("/admin/admin-books");
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
    <section className="section-add-book">
      <h4 className="add-book-title">add book</h4>
      <form onSubmit={handleAddBookButton} className="add-book-form">
        <div className="add-book-form-div">
          <div>
            <InputAdd
              onChange={handleInputChange}
              placeholder={"title"}
              value={input.title || ""}
              name={"title"}
              type={"text"}
            />
            <InputAdd
              onChange={handleInputChange}
              placeholder={"author"}
              value={input.author || ""}
              name={"author"}
              type={"text"}
            />
            <InputAdd
              onChange={handleInputChange}
              placeholder={"subtitle"}
              value={input.subtitle || ""}
              name={"subtitle"}
              type={"text"}
            />
            <InputAdd
              onChange={handleInputChange}
              placeholder={"number of pages"}
              value={input.pages || ""}
              type={"number"}
              name={"pages"}
              min={1}
            />
          </div>

          <div>
            <InputAdd
              onChange={handleInputChange}
              placeholder={"genre"}
              value={input.genre || ""}
              name={"genre"}
              type={"text"}
            />
            <InputAdd
              onChange={handleImageArray}
              placeholder={"front cover image"}
              value={imageArray[0] || ""}
              name={"0"}
              type={"url"}
            />
            <InputAdd
              onChange={handleImageArray}
              placeholder={"back cover image"}
              value={imageArray[1] || ""}
              name={"1"}
              type={"url"}
            />
          </div>
          <div className="add-book-column">
            <textarea
              onChange={handleInputChange}
              className="add-input-textarea"
              value={input.fact || ""}
              placeholder="fun fact"
              name="fact"
            />
            <textarea
              onChange={handleInputChange}
              className="add-input-textarea"
              value={input.summary || ""}
              placeholder="summary"
              name="summary"
            />
          </div>
        </div>
        <button type="submit" className="button add-book-button">
          add
        </button>
      </form>
    </section>
  );
};
