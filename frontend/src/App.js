import React, { useState } from "react";
import NavBar from "./components/NavBar";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useDataFetcher from "./hooks/useDataFetcher";
import { getEntryById } from "./services/getByIdServices";

function App() {
  const { entries, fetchEntries } = useDataFetcher();
  const [searchTerm, setSearchTerm] = useState("");

  // Función para filtrar las entradas por título y autor
  const filterEntries = (entry) => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    return (
      entry.title.toLowerCase().includes(normalizedSearchTerm) ||
      entry.author.toLowerCase().includes(normalizedSearchTerm)
    );
  };

  return (
    <>
      <BrowserRouter>
        <NavBar onSearch={(term) => setSearchTerm(term)} />
        <Routes>
          <Route
            path="/"
            element={
              <BlogList
                entries={entries.filter(filterEntries)}
                onPostSuccess={fetchEntries}
              />
            }
          ></Route>
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
