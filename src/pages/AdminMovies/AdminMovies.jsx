import { AdminMovieCard } from "../../components/AdminMovieCard/AdminMovieCard";
import { useDataContext } from "../../context/DataContext";
import { Loading } from "../../components/Loading/Loading";
import { VscAdd } from "react-icons/vsc";
import { Link } from "react-router-dom";

import "./AdminMovies.css";

export const AdminMovies = () => {
  const { movies, loading } = useDataContext();

  return (
    <section className="section-admin-movies">
      {loading ? (
        <Loading />
      ) : (
        <>
          {movies.map((movie) => {
            return <AdminMovieCard key={movie.id} movie={movie} />;
          })}
          <Link to={"add-movie"}>
            <button className="tab-panel-add-movie">
              <VscAdd className="tab-panel-add-movie-icon" />
            </button>
          </Link>
        </>
      )}
    </section>
  );
};
