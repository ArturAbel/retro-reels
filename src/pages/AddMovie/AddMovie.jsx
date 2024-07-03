import { InputAdd } from "../../components/InputAdd/InputAdd";
import { useDataContext } from "../../context/DataContext";
import { useFormHook } from "../../hooks/useFormHook";
import { useNavigate } from "react-router-dom";

import "./AddMovie.css";

export const AddMovie = () => {
  const { input, handleInputChange } = useFormHook();
  const { handleAddMovie } = useDataContext();
  const navigate = useNavigate();

  const handleAddMovieButton = (e) => {
    e.preventDefault();
    handleAddMovie(input);
    navigate("/admin/admin-movies");
  };

  return (
    <section className="section-add-movie">
      <h4 className="add-movie-title">add movie</h4>
      <form onSubmit={handleAddMovieButton} className="add-movie-form">
        <div className="add-movie-form-div">
          <div>
            <InputAdd
              onChange={handleInputChange}
              placeholder={"movie name"}
              value={input.name || ""}
              name={"name"}
              type={"text"}
            />
            <InputAdd
              onChange={handleInputChange}
              placeholder={"director"}
              value={input.director || ""}
              name={"director"}
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
              placeholder={"genre"}
              value={input.genre || ""}
              name={"genre"}
              type={"text"}
            />
          </div>
          <div>
            <InputAdd
              onChange={handleInputChange}
              placeholder={"poster URL"}
              value={input.poster || ""}
              name={"poster"}
              type={"url"}
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
        <button type="submit" className="button add-movie-button">
          add
        </button>
      </form>
    </section>
  );
};
