import { InputGeneric } from "../InputGeneric/InputGeneric";
import { useDataContext } from "../../context/DataContext";
import { useFormHook } from "../../hooks/useFormHook";
import { MdSystemUpdateAlt } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useEffect, useState } from "react";

import "./AdminMovieCard.css";

export const AdminMovieCard = ({ movie }) => {
  const { handleRemoveMovie, handleUpdateMovie } = useDataContext();
  const { input, setInput, handleInputChange } = useFormHook();
  const [disableInputs, setDisableInputs] = useState(true);

  useEffect(() => {
    setInput(movie);
  }, [movie]);

  const handleRemoveRecordButton = () => {
    handleRemoveMovie(movie);
  };

  const handleUpdateButton = () => {
    setDisableInputs((previousState) => !previousState);
    if (!disableInputs) {
      handleUpdateMovie(input);
    }
  };

  return (
    <div className="admin-movie-card">
      <div className="admin-movie-buttons">
        <button className="admin-movie-button" title="Update">
          <MdSystemUpdateAlt
            className={`admin-movie-icon ${
              !disableInputs ? "confirm-update" : ""
            } `}
            onClick={handleUpdateButton}
          />
        </button>
        <button className="admin-movie-button" title="Remove">
          <TiDeleteOutline
            onClick={handleRemoveRecordButton}
            className="admin-movie-icon"
          />
        </button>
      </div>
      <div className="admin-movie-card-container">
        <div className="admin-movie-image">
          <img className="admin-movie-image" src={movie.poster} alt="image" />
        </div>
        <form className="admin-movie-inputs">
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.name}
            label={"movie"}
            type={"text"}
            name={"name"}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.director}
            label={"director"}
            name={"director"}
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
            value={input.genre}
            label={"genre"}
            type={"text"}
            name={"genre"}
          />
          <InputGeneric
            handleInputChange={handleInputChange}
            disabled={disableInputs}
            value={input.poster}
            label={"poster"}
            name={"poster"}
            type={"url"}
          />
          <div className="admin-movie-input-container">
            <label htmlFor="description">summary</label>
            <textarea
              onChange={handleInputChange}
              disabled={disableInputs}
              value={input.summary}
              maxLength={1000}
              name="summary"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
