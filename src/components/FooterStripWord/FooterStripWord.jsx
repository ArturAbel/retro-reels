import { LuChevronLeft } from "react-icons/lu";
import { FaPeace } from "react-icons/fa";

import "./FooterStripWord.css";

export const FooterStripWord = ({ word }) => {
  return (
    <div className="foot-strip-container">
      <LuChevronLeft className="foot-strip-container-icon" />
      <LuChevronLeft className="foot-strip-container-icon" />
      <h4 className="foot-strip-word">{word} </h4>
      <FaPeace className="foot-strip-container-icon" />
    </div>
  );
};
