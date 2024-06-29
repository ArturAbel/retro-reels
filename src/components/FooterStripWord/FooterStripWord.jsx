import { LuChevronLeft } from "react-icons/lu";
import { FaPeace } from "react-icons/fa";

import "./FooterStripWord.css";

export const FooterStripWord = ({ word }) => {
  return (
    <div className="separator-container">
      <LuChevronLeft />
      <LuChevronLeft />
      <h4 className="separator-word">{word} </h4>
      <FaPeace />
    </div>
  );
};
