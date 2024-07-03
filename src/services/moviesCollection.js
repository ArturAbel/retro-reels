import { db } from "../config/fireBaseConfig";
import {
  collection,
  deleteDoc,
  updateDoc,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";

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

export const addMovie = async (movie) => {
  try {
    await addDoc(collection(db, "movies"), { ...movie });
  } catch (error) {
    console.error(`Unable to add record`, error);
  }
};

export const removeMovie = async (movie) => {
  await deleteDoc(doc(db, "movies", movie.id));
};

export const updateMovie = async (movie) => {
  await updateDoc(doc(db, "movies", movie.id), {
    ...movie,
  });
};
