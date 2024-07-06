import { useDataContext } from "../../context/DataContext";
import { BookTab } from "../../components/BookTab/BookTab";
import { Loading } from "../../components/Loading/Loading";
import { Navbar } from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "./Books.css";

export const Books = () => {
  const { books, loading } = useDataContext();

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const books = document.querySelectorAll(".book-container");

    books.forEach((book) => {
      const imageWrapper = book.querySelector(".book-image-container");

      const onMouseEnter = () => {
        gsap.set(imageWrapper, {
          ease: "none",
          opacity: 1,
        });
        gsap.set(book, {
          background: "white",
        });
      };

      const onMouseLeave = () => {
        gsap.set(imageWrapper, {
          ease: "power1.in",
          duration: 0.3,
          opacity: 0,
        });
        gsap.set(book, {
          background: "none",
        });
      };
      book.addEventListener("mouseenter", onMouseEnter);
      book.addEventListener("mouseleave", onMouseLeave);
    });
  });

  const sortBooksByName = [...books].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <section className="section-books">
      <Navbar
        background={"books-button-background"}
        color={"books-title-color"}
      />
      <h1 className="books-section-title">books</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="books-container">
          {sortBooksByName.map((book) => {
            return (
              <Link
                className="books-link"
                key={book.id}
                to={book.id}
                params={{}}
              >
                <BookTab book={book} />
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};
