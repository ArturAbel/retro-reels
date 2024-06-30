import { GoArrowRight } from "react-icons/go";

import "./BookTab.css";

export const BookTab = () => {
  return (
    <div className="book-container ">
      <div className="book-image-container ">
        <div className="book-image-inner">
          <img className="book-image" src="" alt="" />
        </div>
      </div>
      <div className="book-tab-content">
        <p className="book-tab-name">book name</p>
        <p className="book-tab-author">(author)</p>
        <p className="book-tab-year">year</p>
        <GoArrowRight className="book-tab-icon" />
      </div>
    </div>
  );
};
