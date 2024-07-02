import { AdminBookCard } from "../../components/AdminBookCard/AdminBookCard";
import { useDataContext } from "../../context/DataContext";
import { VscAdd } from "react-icons/vsc";

import "./AdminBooks.css";

export const AdminBooks = () => {
  const { books } = useDataContext();

  return (
    <>
      <div className="admin-books-search"> </div>
      <section className="section-admin-books">
        {books.map((book) => {
          return <AdminBookCard key={book.id} {...book} />;
        })}
        <button className="tab-panel-add-book">
          <VscAdd className="tab-panel-add-book-icon" />
        </button>
      </section>
    </>
  );
};
