import React from "react";
import NavBar from "./components/NavBar";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useDataFetcher from "./hooks/useDataFetcher";
import { getEntryById } from "./services/getByIdServices";

function App() {
  const { entries, fetchEntries } = useDataFetcher();

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <BlogList entries={entries} onPostSuccess={fetchEntries} />
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
