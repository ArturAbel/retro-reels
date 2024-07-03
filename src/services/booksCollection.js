import { db } from "../config/fireBaseConfig";
import {
  collection,
  updateDoc,
  deleteDoc,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";

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

export const addBook = async (book) => {
  try {
    await addDoc(collection(db, "books"), { ...book });
  } catch (error) {
    console.error(`Unable to add book`, error);
  }
};

export const removeBook = async (book) => {
  try {
    await deleteDoc(doc(db, "books", book.id));
  } catch (error) {
    console.error(`Unable to remove book`, error);
  }
};

export const updateBook = async (book) => {
  try {
    await updateDoc(doc(db, "books", book.id), {
      ...book,
    });
  } catch (error) {
    console.error(`Unable to update book`, error);
  }
};
