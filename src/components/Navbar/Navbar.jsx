import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = ({ background, color }) => {
  return (
    <nav className="hero-menu">
      <Link to={"/nav"} className={`button hero-menu-button ${background}`}>
        menu
      </Link>
      <h4 className={`hero-title ${color}`}>retro reels</h4>
    </nav>
  );
};
