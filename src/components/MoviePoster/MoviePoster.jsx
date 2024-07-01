import "./MoviePoster.css";

export const MoviePoster = ({ movie, setMovieDetails }) => {
  const handlePosterClick = () => {
    setMovieDetails(movie);
  };

  return (
    <div className="movie-poster" onClick={handlePosterClick}>
      <img className="movie-poster-image" src={movie.poster} alt={movie.name} />
    </div>
  );
};
