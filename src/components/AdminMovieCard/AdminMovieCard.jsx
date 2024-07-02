import { InputGeneric } from "../InputGeneric/InputGeneric";
import { MdSystemUpdateAlt } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

import "./AdminMovieCard.css";

export const AdminMovieCard = ({
  director,
  summary,
  poster,
  genre,
  name,
  year,
}) => {
  return (
    <div className="admin-movie-card">
      <div className="admin-movie-buttons">
        <button className="admin-movie-button" title="Update">
          <MdSystemUpdateAlt className="admin-movie-icon" />
        </button>
        <button className="admin-movie-button" title="Remove">
          <TiDeleteOutline className="admin-movie-icon" />
        </button>
      </div>
      <div className="admin-movie-card-container">
        <div className="admin-movie-image">
          <img className="admin-movie-image" src={poster} alt="image" />
        </div>
        <form className="admin-movie-inputs">
          <InputGeneric
            label={"movie"}
            type={"text"}
            value={name}
            name={name}
          />
          <InputGeneric
            label={"director"}
            type={"text"}
            value={director}
            name={director}
          />
          <InputGeneric
            label={"year"}
            type={"number"}
            value={year}
            name={year}
            min={1930}
            max={2000}
          />
          <InputGeneric
            label={"genre"}
            type={"text"}
            value={genre}
            name={genre}
          />
          <InputGeneric
            label={"poster"}
            type={"url"}
            value={poster}
            name={poster}
          />
          <div className="admin-movie-input-container">
            <label htmlFor="description">summary</label>
            <textarea type="text" value={summary} disabled={true} />
          </div>
        </form>
      </div>
    </div>
  );
};
