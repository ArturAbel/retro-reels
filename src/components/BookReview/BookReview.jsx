import { useDataContext } from "../../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./BookReview.css";

export const BookReview = () => {
  const { books, loading } = useDataContext();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const locateBook = books.find((book) => book.id === id);
    setBook(locateBook);
  }, [books]);

  const handleBackButton = () => {
    navigate("/books");
  };

  const { title, author, fact, summary, genre, pages, images } = book || {
    book,
  };

  return loading || !book ? (
    <p>Loading...</p>
  ) : (
    <section className="section-book-review">
      <div className="book-review-button-container">
        <button
          className="book-review-button button"
          onClick={handleBackButton}
        >
          back
        </button>
      </div>
      <div className="book-review-container">
        <div className="book-images-container">
          <img className="book-front-cover-image" src={images[0]} alt="image" />
          <img className="book-back-cover-image" src={images[1]} alt="image" />
        </div>
        <div className="book-content-container">
          <div className="book-content-upper-container">
            <h3 className="book-content-title">{title}</h3>
            <p className="book-content-author">{author}</p>
          </div>
          <div className="book-content-lower-container">
            <div>
              <strong>Fun fact:</strong>
              <p>{fact}</p>
            </div>
            <div>
              <strong>Summary:</strong>
              <p>{summary}</p>
            </div>
            <div className="book-minor-details-container">
              <span className="book-content-genre">
                <strong>genre:</strong>
                {genre}
              </span>
              <strong>pages:</strong>
              <span>{pages}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
