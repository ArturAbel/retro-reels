import { AdminRecordCard } from "../../components/AdminRecordCard/AdminRecordCard";
import { useDataContext } from "../../context/DataContext";
import { VscAdd } from "react-icons/vsc";
import { Link } from "react-router-dom";

import "./AdminRecords.css";

export const AdminRecords = () => {
  const { records } = useDataContext();

  return (
    <section className="section-admin-records">
      {records.map((record) => {
        return <AdminRecordCard key={record.id} record={record} />;
      })}
      <Link to={"add-record"}>
        <button className="tab-panel-add-record">
          <VscAdd className="tab-panel-add-record-icon" />
        </button>
      </Link>
    </section>
  );
};
