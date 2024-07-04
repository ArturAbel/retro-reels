import { loadingImage } from "../../utilities/variables";

import "./Loading.css";

export const Loading = () => {
  return (
    <section className="section-loading">
      <h4 className="loading-title">Loading...</h4>
      <div className="loading-image-container">
        <img className="loading-image" src={loadingImage} alt="loading-image" />
      </div>
    </section>
  );
};
