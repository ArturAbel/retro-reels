import { FooterStripWord } from "../FooterStripWord/FooterStripWord";
import { footerWords } from "../../utilities/variables";

import "./FooterStrip.css";

export const FooterStrip = () => {
  return (
    <div className="footer-strip">
      {footerWords.map((word, index) => {
        return <FooterStripWord key={index} word={word} />;
      })}
    </div>
  );
};
