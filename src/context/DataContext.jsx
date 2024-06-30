import { createContext, useContext, useEffect, useState } from "react";
import { getRecords } from "../services/firebaseAPI";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  //   Records
  const fetchRecords = async () => {
    try {
      const records = await getRecords();
      setRecords(records);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);
  
  return (
    <DataContext.Provider value={{records}}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
