import { notFoundImage } from "../../utilities/variables";
import { useNavigate } from "react-router-dom";

import "./NotFound.css";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleBckButton = () => {
    navigate("/");
  };

  return (
    <section className="section-not-found">
      <div className="not-found-back-button-container">
        <button onClick={handleBckButton} className="not-found-back-button button">back</button>
      </div>
      <div className="not-found-content-container">
        <img
          className="not-found-image"
          src={notFoundImage}
          alt="not found"
        />
        <h4 className="not-found-title">
          Sorry man, this page is like totally missing, Let&apos;s take it easy
          and find another path.
        </h4>
      </div>
    </section>
  );
};
