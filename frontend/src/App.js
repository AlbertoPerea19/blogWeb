import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useDataFetcher from "./hooks/useDataFetcher";
import { getEntryById } from "./services/getByIdServices";
import filterEntries from "./hooks/filterEntries";

function App() {
  const { entries, fetchEntries } = useDataFetcher();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [filteredEntries, setFilteredEntries] = useState([]);

  useEffect(() => {
    const filtered = filterEntries(entries, searchTerm, searchType);
    setFilteredEntries(filtered);
  }, [entries, searchTerm, searchType]);

  const handleSearch = (term, type) => {
    setSearchTerm(term);
    setSearchType(type);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<BlogList entries={filteredEntries} onPostSuccess={fetchEntries} />}
          />
          <Route
            path="/blog/:id"
            element={<Blog entries={entries} getEntryById={getEntryById} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
