import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllEntries } from "./services/getAllService";
import { getEntryById } from "./services/getByIdServices";

function App() {
  const [entries, setEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getAllEntries();
        setEntries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchEntries();
  }, []);

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <BlogList
                entries={entries}
                currentPage={currentPage}
                blogsPerPage={blogsPerPage}
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
              />
            }
          ></Route>
          <Route
            path="/blog/:id"
            element={<Blog getEntryById={getEntryById} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
