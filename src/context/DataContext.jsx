import { createContext, useContext, useEffect, useState } from "react";
import { getBooks, getMovies, getRecords } from "../services/firebaseAPI";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [movies, setMovies] = useState([]);
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
    setLoading(true);
    try {
      const books = await getBooks();
      setBooks(books);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  //   Books
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
    fetchMovies();
    fetchBooks();
  }, []);

  return (
    <DataContext.Provider value={{ records, books, movies, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
