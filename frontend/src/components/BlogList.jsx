import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CardBlog from "./CardBlog";
import BlogForm from "./BlogForm";
import Pagination from "./Pagination";

const BlogList = ({ entries, onPostSuccess }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const [showFormModal, setShowFormModal] = useState(false);

  const handleShowFormModal = () => setShowFormModal(true);
  const handleCloseFormModal = () => setShowFormModal(false);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = entries.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 mt-4 mb-4 d-flex justify-content-center">
          <Button
            className="btn btn-primary me-2"
            onClick={handleShowFormModal}
          >
            Nuevo Post
          </Button>
        </div>

        {currentBlogs.map((entry) => (
          <div key={entry.id} className="col-12 mb-4">
            <CardBlog entry={entry} />
          </div>
        ))}

        <Pagination
          currentPage={currentPage}
          totalItems={entries.length}
          itemsPerPage={blogsPerPage}
          onPrevPage={goToPreviousPage}
          onNextPage={goToNextPage}
        />
      </div>

      <Modal show={showFormModal} onHide={handleCloseFormModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BlogForm onPostSuccess={onPostSuccess} onCloseModal={handleCloseFormModal}/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BlogList;