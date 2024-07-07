import { SearchYear } from "../../components/SearchYear/SearchYear";
import { useDataContext } from "../../context/DataContext";
import { Loading } from "../../components/Loading/Loading";
import { Navbar } from "../../components/Navbar/Navbar";
import { Record } from "../../components/Record/Record";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";

import "./Records.css";

export const Records = () => {
  const [youtubeDisplay, setYoutubeDisplay] = useState(false);
  const [video, setVideo] = useState("");
  const { records, loading } = useDataContext();
  const [filterData, setFilterData] = useState(records);

  const handleCloseYoutubeButton = () => {
    setYoutubeDisplay(false);
    setVideo("");
  };

  return (
    <section className="section-records">
      <Navbar
        background={"records-button-background"}
        color={"records-title-color"}
      />
      <h1 className="records-section-title">records</h1>
      <SearchYear setFilterData={setFilterData} data={records} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="records-grid">
            {filterData.map((record) => {
              return (
                <Record
                  setYoutubeDisplay={setYoutubeDisplay}
                  setVideo={setVideo}
                  record={record}
                  key={record.id}
                />
              );
            })}
          </div>
          {youtubeDisplay && (
            <div className="youtube-video-container">
              <RiCloseLargeLine
                onClick={handleCloseYoutubeButton}
                className="youtube-close-icon"
              />
              <iframe src={video} width={400} height={300}></iframe>
            </div>
          )}
        </>
      )}
    </section>
  );
};
