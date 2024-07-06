import { SpinnerItem } from "../SpinnerItem/SpinnerItem";
import { Link } from "react-router-dom";
import {
  booksImage1,
  booksImage2,
  booksImage3,
  arrowMovies,
  arrowBooks,
  tvSpinner1,
  tvSpinner2,
  tvImage,
  tvGif,
} from "../../utilities/variables";

import "./TvComponent.css";

export const TvComponent = ({ tvSectionRef }) => {
  return (
    <section ref={tvSectionRef} className="section-tv">
      <div className="tv-component-title-container">
        <SpinnerItem image={tvSpinner1} index={3} />
        <h4 className="tv-component-title title-movies">Vintage movies</h4>
        <img
          className="tv-component-arrow arrow-movies"
          src={arrowMovies}
          alt="arrow"
        />
      </div>
      <div className="tv-component-container">
        <Link to={"books"}>
          <div className="tv-books-container">
            <img
              className="tv-books-image1"
              src={booksImage1}
              alt="books"
              loading="lazy"
            />
            <img
              className="tv-books-image2"
              src={booksImage2}
              alt="books"
              loading="lazy"
            />
            <div className="tv-bottom-books-container">
              <img
                className="tv-books-image3"
                src={booksImage3}
                alt="books"
                loading="lazy"
              />
            </div>
          </div>
        </Link>
        <div className="tv-container">
          <Link to={"movies"}>
            <div className="tv-image-container">
              <img className="tv-image" src={tvImage} alt="tv" loading="lazy" />
              <div className="tv-screen">
                <img
                  className="tv-screen-gif"
                  src={tvGif}
                  alt="movie"
                  height={"300px"}
                  width={"350px"}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="tv-component-title-container">
        <h4 className="tv-component-title title-books">Epics</h4>
        <SpinnerItem image={tvSpinner2} index={4} />
        <img
          className="tv-component-arrow arrow-books"
          src={arrowBooks}
          alt="arrow"
        />
      </div>
    </section>
  );
};
