import VerticalTabs from "../../components/VerticalTabs/VerticalTabs";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./Admin.css";

export const Admin = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOutButton = () => {
    navigate("/nav");
    logOut();
  };

  return (
    <section className="section-admin">
      <div className="admin-logout-button-container">
        <button
          className="button admin-logout-button"
          onClick={handleLogOutButton}
        >
          logout
        </button>
      </div>

      <div className="admin-vertical-tabs">
        <VerticalTabs />
      </div>
    </section>
  );
};
