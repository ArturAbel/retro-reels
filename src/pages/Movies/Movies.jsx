import { MoviePoster } from "../../components/MoviePoster/MoviePoster";
import { SearchYear } from "../../components/SearchYear/SearchYear";
import { useDataContext } from "../../context/DataContext";
import { Loading } from "../../components/Loading/Loading";
import { Navbar } from "../../components/Navbar/Navbar";
import { useState } from "react";

import "./Movies.css";

export const Movies = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movies, loading } = useDataContext();
  const [filterData, setFilterData] = useState(movies);

  const { name, year, genre, director, summary } = movieDetails || {};

  return (
    <section className="section-movies static ">
      <Navbar
        background={"movies-button-background"}
        color={"movies-title-color"}
      />
      <h1 className="movies-section-title">movies</h1>
      <SearchYear setFilterData={setFilterData} data={movies} />
      {loading ? (
        <Loading />
      ) : (
        <section className="movies-section-divider">
          <div className="movies-posters-container">
            <div className="movies-grid">
              {filterData.map((movie) => {
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
      )}
    </section>
  );
};
