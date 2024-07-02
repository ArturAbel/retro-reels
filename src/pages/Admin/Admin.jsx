import { AdminNavbar } from "../../components/AdminNavbar/AdminNavbar";
import { Outlet } from "react-router-dom";

import "./Admin.css";

export const Admin = () => {
  return (
    <section className="section-admin">
      <AdminNavbar />
      <div className="admin-vertical-tabs">
        <Outlet />
      </div>
    </section>
  );
};
