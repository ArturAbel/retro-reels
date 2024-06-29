import { Navbar } from "../../components/Navbar/Navbar";

import "./Records.css";

export const Records = () => {
  return (
    <section className="section-records">
      <Navbar
        background={"records-button-background"}
        color={"records-title-color"}
      />
      <h1 className="records-section-title">records</h1>
      <div className="records-grid">
        <div className="records-grid-card">
          <div className="record-card-image-container">
            <img src="../../assets/img/records/1.jpg" alt="" />
            <img
              className="record-spinning-image"
              src="../../assets/img/records/1.jpg"
              alt=""
            />
          </div>
          <div className="record-card-content">
            <div>
              <p className="record-card-year">year</p>
              <p className="record-card-singer">singer</p>
            </div>
            <div>
              <p className="record-card-song">song name name</p>
            </div>
          </div>
        </div>

        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>
        <div className="records-grid-card"></div>

        <div className="records-grid-card"></div>
      </div>
    </section>
  );
};
