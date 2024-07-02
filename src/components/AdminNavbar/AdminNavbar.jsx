import { useAuthContext } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

import "./AdminNavbar.css";

export const AdminNavbar = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOutButton = () => {
    navigate("/nav");
    logOut();
  };

  return (
    <div className="navbar-admin">
      <div className="navbar-admin-logout-button-container">
        <button
          className="button navbar-admin-logout-button"
          onClick={handleLogOutButton}
        >
          logout
        </button>
      </div>
      <div className="navbar-admin-buttons-container">
        <NavLink to={"admin-records"} className="navbar-link button">
          records
        </NavLink>
        <NavLink to={"admin-books"} className="navbar-link button">books</NavLink>
        <NavLink to={"admin-movies"} className="navbar-link button">movies</NavLink>
      </div>
    </div>
  );
};
