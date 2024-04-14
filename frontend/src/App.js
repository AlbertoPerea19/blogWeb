import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import BlogList from './components/BlogList';

function App() {
  const [entries, setEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch('http://localhost:4000/entry');
        if (response.ok) {
          const data = await response.json();
          setEntries(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
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
      <NavBar />
      <div className="container mt-4">
        <BlogList
          entries={entries}
          currentPage={currentPage}
          blogsPerPage={blogsPerPage}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      </div>
    </>
  );
}

export default App;
