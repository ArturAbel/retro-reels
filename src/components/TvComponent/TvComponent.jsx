import { SpinnerItem } from "../SpinnerItem/SpinnerItem";
import { tvSpinner1, tvSpinner2 } from "../../utilities/variables";

import "./TvComponent.css";

export const TvComponent = ({tvSectionRef}) => {
  return (
    <section ref={tvSectionRef} className="section-tv">
      <div className="tv-component-title-container">
        <SpinnerItem image={tvSpinner1} index={3} />
        <h4 className="tv-component-title title-movies">Vintage movies</h4>
      </div>
      <div className="tv-component-container">
        <div className="tv-books-container">
          <img
            className="tv-books-image1"
            src="../../assets/img/main/books1.png"
            alt=""
          />
          <img
            className="tv-books-image2"
            src="../../assets/img/main/books2.png"
            alt=""
          />
          <div className="tv-bottom-books-container">
            <img
              className="tv-books-image3"
              src="../../assets/img/main/books3.png"
              alt=""
            />
          </div>
        </div>
        <div className="tv-container">
          <div className="tv-image-container">
            <img
              className="tv-image"
              src="../../assets/img/main/tv.png"
              alt=""
            />
            <div className="tv-screen">
              <img
                className="tv-screen-gif"
                src="../../assets/img/main/screen.gif"
                alt=""
                height={"300px"}
                width={"350px"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tv-component-title-container">
        <h4 className="tv-component-title title-books">Epics</h4>
        <SpinnerItem image={tvSpinner2} index={4} />
      </div>
    </section>
  );
};
