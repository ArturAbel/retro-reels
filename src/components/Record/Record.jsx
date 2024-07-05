import "./Record.css";

export const Record = ({ record, setVideo, setYoutubeDisplay }) => {
  const { image, year, singer, song } = record;

  const handleImageClick = () => {
    setYoutubeDisplay(true);
    setVideo(record.link);
  };

  return (
    <div className="records-grid-card">
      <div className="record-card-image-container">
        <img className="record-still-image" src={image} alt="record" />
        <img
          className="record-spinning-image"
          onClick={handleImageClick}
          src={image}
          alt="record"
        />
      </div>
      <div className="record-card-content-container">
        <div className="record-card-content-div">
          <span className="record-card-year">({year})</span>
          <span className="record-card-singer">{singer}</span>
        </div>
        <div className="record-card-content-div">
          <span className="record-card-song">{song}</span>
        </div>
      </div>
    </div>
  );
};
