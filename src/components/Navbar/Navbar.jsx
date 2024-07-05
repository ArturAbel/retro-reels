import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = ({ background, color }) => {
  return (
    <nav className="nav-menu">
      <Link to={"/nav"} className={`button nav-menu-button ${background}`}>
        menu
      </Link>
      <h4 className={`nav-title ${color}`}>retro reels</h4>
    </nav>
  );
};
