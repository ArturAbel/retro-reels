import { createContext, useContext, useEffect, useState } from "react";
import {
  updateMovie,
  removeMovie,
  getMovies,
  addMovie,
} from "../services/moviesCollection";
import {
  removeBook,
  updateBook,
  getBooks,
  addBook,
} from "../services/booksCollection";
import {
  removeRecord,
  updateRecord,
  getRecords,
  addRecord,
} from "../services/recordsCollection";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);

  // -------------------------------- //
  // -----------Records --------------//
  // -------------------------------- //

  const fetchRecords = async () => {
    try {
      const records = await getRecords();
      setRecords(records);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleAddRecord = async (record) => {
    try {
      await addRecord(record);
      fetchRecords();
    } catch (error) {
      console.error(`Error adding record`, error);
    }
  };

  const handleRemoveRecord = async (record) => {
    try {
      await removeRecord(record);
      fetchRecords();
    } catch (error) {
      console.error(`Error removing record`, error);
    }
  };

  const handleUpdateRecord = async (record) => {
    try {
      await updateRecord(record);
      fetchRecords();
    } catch (error) {
      console.error(`Error updating record`, error);
    }
  };

  // -------------------------------- //
  // -----------Books ----------------//
  // -------------------------------- //

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

  const handleAddBook = async (book) => {
    try {
      await addBook(book);
      fetchBooks();
    } catch (error) {
      console.error(`Error adding record`, error);
    }
  };

  const handleRemoveBook = async (book) => {
    try {
      await removeBook(book);
      fetchBooks();
    } catch (error) {
      console.error(`Error removing record`, error);
    }
  };

  const handleUpdateBook = async (book) => {
    try {
      await updateBook(book);
      fetchBooks();
    } catch (error) {
      console.error(`Error updating record`, error);
    }
  };

  // -------------------------------- //
  // -----------Movies- --------------//
  // -------------------------------- //

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

  const handleAddMovie = async (movie) => {
    try {
      await addMovie(movie);
      fetchMovies();
    } catch (error) {
      console.error(`Error adding record`, error);
    }
  };

  const handleRemoveMovie = async (movie) => {
    try {
      await removeMovie(movie);
      fetchMovies();
    } catch (error) {
      console.error(`Error removing record`, error);
    }
  };

  const handleUpdateMovie = async (movie) => {
    try {
      await updateMovie(movie);
      fetchMovies();
    } catch (error) {
      console.error(`Error updating record`, error);
    }
  };

  useEffect(() => {
    fetchRecords();
    fetchMovies();
    fetchBooks();
  }, []);

  return (
    <DataContext.Provider
      value={{
        handleRemoveRecord,
        handleUpdateRecord,
        handleUpdateMovie,
        handleRemoveMovie,
        handleUpdateBook,
        handleRemoveBook,
        handleAddRecord,
        handleAddMovie,
        handleAddBook,
        records,
        loading,
        movies,
        books,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
