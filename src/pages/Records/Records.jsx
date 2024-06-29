import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import "./Records.css";

export const Records = () => {
  const recordsContainer = useRef();
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const records = document.querySelectorAll(".record");

    records.forEach((record) => {
      const onMouseEnter = () => {
        gsap.to(record, {
          width: "25rem",
        });
      };

      const onMouseLeave = () => {
        gsap.to(record, {
          width: "2rem",
        });
      };

      record.addEventListener("mouseenter", onMouseEnter);
      record.addEventListener("mouseleave", onMouseLeave);
    }),
      { scope: recordsContainer };
  });

  return (
    <section className="section-records">
      <div ref={recordsContainer} className="records-container">
        <div className="records">
          <div className="record">
            <img src="./assets/1.jpg" alt="" className="music" />
            <audio id="music0" controls="none">
              <source
                src="http://sheriffderek.consulting/audio/mp3/short.mp3"
                type="audio/mp3"
              />
            </audio>
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
          <div className="record">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
