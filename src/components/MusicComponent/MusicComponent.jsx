import {
  bigRecordImage,
  bigCoverImage,
  arrowRecords,
} from "../../utilities/variables";

import "./MusicComponent.css";

export const MusicComponent = ({ musicSectionRef }) => {
  return (
    <section ref={musicSectionRef} className="section-music-component">
      <div className="music-component-record-container">
        <img
          className="music-component-record-image"
          src={bigRecordImage}
          alt="record"
        />
        <img
          className="music-component-cover-image"
          src={bigCoverImage}
          alt="record cover"
        />
      </div>

      <div className="music-component-container">
        <h4 className="music-component-title">Classic Spins</h4>
        <img className="music-component-arrow" src={arrowRecords}></img>
      </div>
    </section>
  );
};
