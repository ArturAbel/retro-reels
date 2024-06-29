import { Navbar } from "../../components/Navbar/Navbar";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import "./Movies.css";

export const Movies = () => {
  const moviesContainer = useRef();
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const movies = document.querySelectorAll(".movie");

    movies.forEach((movie) => {
      const onMouseEnter = () => {
        gsap.to(movie, {
          width: "30rem",
        });
      };

      const onMouseLeave = () => {
        gsap.to(movie, {
          width: "30rem",
        });
      };

      movie.addEventListener("mouseenter", onMouseEnter);
      movie.addEventListener("mouseleave", onMouseLeave);
    }),
      { scope: moviesContainer };
  });

  return (
    <section className="section-movies">
      <Navbar background={""} color={""} />
      <h1 className="movies-section-title">records</h1>
      <div ref={moviesContainer} className="movies-container">
        <div className="movies">
          <div className="movie">
            <img src="" alt="" />
          </div>
          <div className="movie">
            <img src="" alt="" />
          </div>
          <div className="movie">
            <img src="" alt="" />
          </div>
          <div className="movie">
            <img src="" alt="" />
          </div>
          <div className="movie">
            <img src="" alt="" />
          </div>
          <div className="movie">
            <img src="" alt="" />
          </div>
          <div className="movie">
            <img src="" alt="" />
          </div>
          <div className="movie">
            <img src="" alt="" />
          </div>
          <div className="movie">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
