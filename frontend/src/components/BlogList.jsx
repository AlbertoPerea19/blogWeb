import React from 'react';
import CardBlog from './CardBlog';

const BlogList = ({ entries, currentPage, blogsPerPage, goToPreviousPage, goToNextPage }) => {
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = entries.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="row">
      {currentBlogs.map((entry) => (
        <div key={entry.id} className="col-12 mb-4">
          <CardBlog entry={entry} />
        </div>
      ))}

      <div className="col-12 mt-4 d-flex justify-content-center">
        <button
          className="btn btn-primary me-2"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="btn btn-primary"
          onClick={goToNextPage}
          disabled={indexOfLastBlog >= entries.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
