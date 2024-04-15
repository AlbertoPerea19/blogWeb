import { useState, useEffect } from "react";
import { getAllEntries } from "../services/getAllService";

const useDataFetcher = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
      fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const data = await getAllEntries();
      setEntries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { entries, fetchEntries };
};

export default useDataFetcher;