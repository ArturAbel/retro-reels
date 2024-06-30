import { BookTab } from "../../components/BookTab/BookTab";
import { Navbar } from "../../components/Navbar/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "./Books.css";

export const Books = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const books = document.querySelectorAll(".book-container");

    books.forEach((books) => {
      const imageWrapper = books.querySelector(".book-image-container");

      const onMouseEnter = () => {
        gsap.set(imageWrapper, {
          ease: "none",
          opacity: 1,
        });
        gsap.set(books, {
          background: "white",
        });
      };

      const onMouseLeave = () => {
        gsap.set(imageWrapper, {
          ease: "power1.in",
          duration: 0.3,
          opacity: 0,
        });
        gsap.set(books, {
          background: "none",
        });
      };

      books.addEventListener("mouseenter", onMouseEnter);
      books.addEventListener("mouseleave", onMouseLeave);
    });
  });

  return (
    <section className="section-books">
      <Navbar
        background={"books-button-background"}
        color={"books-title-color"}
      />
      <h1 className="books-section-title">books</h1>
      <div className="books-container">
        <BookTab />
      </div>
    </section>
  );
};
