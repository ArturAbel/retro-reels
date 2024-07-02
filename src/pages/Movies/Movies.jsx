import { MoviePoster } from "../../components/MoviePoster/MoviePoster";
import { useDataContext } from "../../context/DataContext";
import { Navbar } from "../../components/Navbar/Navbar";
import { useState } from "react";

import "./Movies.css";

export const Movies = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movies } = useDataContext();

  const { name, year, genre, director, summary } = movieDetails || {};

  return (
    <section className="section-movies">
      <Navbar
        background={"movies-button-background"}
        color={"movies-title-color"}
      />
      <h1 className="movies-section-title">movies</h1>
      <section className="movies-section-divider">
        <div className="movies-posters-container">
          <div className="movies-grid">
            {movies.map((movie) => {
              return (
                <MoviePoster
                  key={movie.id}
                  setMovieDetails={setMovieDetails}
                  movie={movie}
                />
              );
            })}
          </div>
        </div>
        <div className="movie-info-container">
          {movieDetails && (
            <>
              <h4 className="movie-title">
                {name} / {year} / {genre}
              </h4>
              <p className="movie-director">{director}</p>
              <p className="movie-summary">{summary}</p>
            </>
          )}
        </div>
      </section>
    </section>
  );
};
