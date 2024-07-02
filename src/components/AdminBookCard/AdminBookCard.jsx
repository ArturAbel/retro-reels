import { InputGeneric } from "../InputGeneric/InputGeneric";
import { MdSystemUpdateAlt } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

import "./AdminBookCard.css";

export const AdminBookCard = ({
  subtitle,
  summary,
  author,
  images,
  title,
  pages,
  genre,
  fact,
}) => {
  return (
    <div className="admin-book-card">
      <div className="admin-book-buttons">
        <button className="admin-book-button" title="Update">
          <MdSystemUpdateAlt className="admin-book-icon" />
        </button>
        <button className="admin-book-button" title="Remove">
          <TiDeleteOutline className="admin-book-icon" />
        </button>
      </div>
      <div className="admin-book-card-container">
        <div className="admin-book-image">
          <img className="admin-book-image" src={images[0]} alt="image" />
        </div>
        <form className="admin-book-inputs">
          <InputGeneric
            label={"title"}
            type={"text"}
            name={"title"}
            value={title}
          />
          <InputGeneric
            name={"subtitle"}
            label={"subtitle"}
            value={subtitle}
            type={"text"}
          />
          <InputGeneric
            type={"number"}
            name={"pages"}
            label={"pages"}
            value={pages}
          />
          <InputGeneric type={"text"} name={"genre"} label={genre} value={genre} />
          <InputGeneric
            name={"author"}
            label={"author"}
            value={author}
            type={"text"}
          />
          <InputGeneric
            label={"front cover image"}
            name={"images[0]"}
            value={images[0]}
            type={"url"}
          />
          <InputGeneric
            label={"back cover image"}
            name={"images[1]"}
            value={images[1]}
            type={"url"}
          />
          <div className="admin-book-input-container">
            <label htmlFor="fact">fact</label>
            <textarea
              className="admin-book-textarea-fact"
              value={fact}
              type="text"
              name="fact"
            />
          </div>
          <div className="admin-book-input-container">
            <label htmlFor="summary">summary</label>
            <textarea
              className="admin-book-textarea-summary"
              disabled={true}
              value={summary}
              name="summary"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
