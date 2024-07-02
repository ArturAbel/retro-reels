import { AdminMovieCard } from "../../components/AdminMovieCard/AdminMovieCard";
import { useDataContext } from "../../context/DataContext";
import { VscAdd } from "react-icons/vsc";

import "./AdminMovies.css";

export const AdminMovies = () => {
  const { movies } = useDataContext();

  return (
    <section className="section-admin-movies">
      {movies.map((movie) => {
        return <AdminMovieCard key={movie.id} {...movie} />;
      })}
      <button className="tab-panel-add-movie">
        <VscAdd className="tab-panel-add-movie-icon" />
      </button>
    </section>
  );
};
