import { FaPeace } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="section-navigation">
      <div className="navigation-top">
        <Link to={"/"} className="navigation-top-link">
          home
        </Link>
        <h1 className="navigation-header">retro reels</h1>
        <Link to={"/admin"} className="navigation-top-link">
          admin
        </Link>
      </div>
      <div className="navigation-links">
        <div>
          <Link className="navigation-main-link link-records" to={"/records"}>
            <FaPeace className="records-hover-icon" />
            records
            <FaPeace className="records-hover-icon" />
          </Link>
        </div>
        <div>
          <Link to={"/books"} className="navigation-main-link link-books">
            <FaPeace className="books-hover-icon" />
            books
            <FaPeace className="books-hover-icon" />
          </Link>
        </div>
        <div>
          <Link to={"/movies"} className="navigation-main-link link-movies">
            <FaPeace className="movies-hover-icon" />
            movies
            <FaPeace className="movies-hover-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
