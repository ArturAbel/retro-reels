import { MdSystemUpdateAlt } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

import "./AdminRecordCard.css";

export const AdminRecordCard = ({
  description,
  albumName,
  singer,
  image,
  song,
  year,
  link,
}) => {
  return (
    <div className="admin-record-card">
      <div className="admin-record-buttons">
        <button className="admin-record-button" title="Update">
          <MdSystemUpdateAlt className="admin-record-icon" />
        </button>
        <button className="admin-record-button" title="Remove">
          <TiDeleteOutline className="admin-record-icon" />
        </button>
      </div>
      <div className="admin-record-card-container">
        <div className="admin-record-image">
          <img className="admin-record-image" src={image} alt="image" />
        </div>
        <form className="admin-record-inputs">
          <div className="admin-record-input-container">
            <label htmlFor="singer">singer</label>
            <input type="text" value={singer} />
          </div>
          <div className="admin-record-input-container">
            <label htmlFor="song">song name</label>
            <input type="text" value={song} />
          </div>
          <div className="admin-record-input-container">
            <label htmlFor="year">year</label>
            <input type="number" min={1930} max={2000} value={year} />
          </div>
          <div className="admin-record-input-container">
            <label htmlFor="album">album</label>
            <input type="text" value={albumName} />
          </div>
          <div className="admin-record-input-container">
            <label htmlFor="image">image url</label>
            <input type="url" value={image} />
          </div>
          <div className="admin-record-input-container">
            <label htmlFor="link">link</label>
            <input type="url" value={link} />
          </div>
          <div className="admin-record-input-container">
            <label htmlFor="description">description</label>
            <textarea type="text" value={description} disabled={true} />
          </div>
        </form>
      </div>
    </div>
  );
};
