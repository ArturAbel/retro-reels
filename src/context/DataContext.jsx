import { createContext, useContext, useEffect, useState } from "react";
import { getBooks, getRecords } from "../services/firebaseAPI";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const [books, setBooks] = useState([]);

  //   Records
  const fetchRecords = async () => {
    try {
      const records = await getRecords();
      setRecords(records);
    } catch (error) {
      console.error(error.message);
    }
  };

  //   Books
  const fetchBooks = async () => {
    try {
      const books = await getBooks();
      setBooks(books);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRecords();
    fetchBooks();
  }, []);

  return (
    <DataContext.Provider value={{ records, books }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
