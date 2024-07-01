import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/fireBaseConfig";

export const getRecords = async () => {
  try {
    const recordsCollection = collection(db, "records");
    const recordsSnapshot = await getDocs(recordsCollection);
    const recordsArray = recordsSnapshot.docs;
    return recordsArray.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Unable to fetch records`, error);
    return [];
  }
};

export const getBooks = async () => {
  try {
    const booksCollection = collection(db, "books");
    const booksSnapshot = await getDocs(booksCollection);
    const BooksArray = booksSnapshot.docs;
    return BooksArray.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Unable to fetch books`, error);
    return [];
  }
};

export const getMovies = async () => {
  try {
    const moviesCollection = collection(db, "movies");
    const moviesSnapshot = await getDocs(moviesCollection);
    const moviesArray = moviesSnapshot.docs;
    return moviesArray.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Unable to fetch movies`, error);
    return [];
  }
};
