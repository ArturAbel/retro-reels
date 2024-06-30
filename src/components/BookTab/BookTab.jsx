import { GoArrowRight } from "react-icons/go";

import "./BookTab.css";

export const BookTab = ({ book }) => {
  const { images, title, author, year } = book;

  return (
    <div className="book-container ">
      <div className="book-image-container ">
        <div className="book-image-inner">
          <img className="book-image" src={images[0]} alt={title} />
        </div>
      </div>
      <div className="book-tab-content">
        <p className="book-tab-book-title">{title}</p>
        <p className="book-tab-author">{`(${author})`}</p>
        <p className="book-tab-year">{year}</p>
        <GoArrowRight className="book-tab-icon" />
      </div>
    </div>
  );
};
