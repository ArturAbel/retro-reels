import { AdminBookCard } from "../../components/AdminBookCard/AdminBookCard";
import { useDataContext } from "../../context/DataContext";
import { Loading } from "../../components/Loading/Loading";
import { VscAdd } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./AdminBooks.css";

export const AdminBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { books, loading } = useDataContext();
  const [filterBooks, setFilterBooks] = useState(books);

  useEffect(() => {
    setFilterBooks(books);
  }, [books]);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchTerm(search);

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilterBooks(filteredBooks);
  };

  return (
    <>
      <div className="admin-books-search">
        <input className="add-input search-book-input"
          placeholder={"Search Book"}
          onChange={handleSearch}
          value={searchTerm}
          type="text"
        />
      </div>
      <section className="section-admin-books">
        {loading ? (
          <Loading />
        ) : (
          <>
            {filterBooks.map((book) => {
              return <AdminBookCard key={book.id} book={book} />;
            })}
            <Link to={"add-book"}>
              <button className="tab-panel-add-book">
                <VscAdd className="tab-panel-add-book-icon" />
              </button>
            </Link>
          </>
        )}
      </section>
    </>
  );
};
