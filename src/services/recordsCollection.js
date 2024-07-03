import { db } from "../config/fireBaseConfig";
import {
  collection,
  deleteDoc,
  updateDoc,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";

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

export const addRecord = async (record) => {
  try {
    await addDoc(collection(db, "records"), { ...record });
  } catch (error) {
    console.error(`Unable to add record`, error);
  }
};

export const removeRecord = async (record) => {
  await deleteDoc(doc(db, "records", record.id));
};

export const updateRecord = async (record) => {
  await updateDoc(doc(db, "records", record.id), {
    ...record,
  });
};
