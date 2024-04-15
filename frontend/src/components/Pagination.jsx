import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPrevPage,
  onNextPage,
}) => {
  const indexOfLastItem = currentPage * itemsPerPage;

  return (
    <div className="col-12 mt-4 d-flex justify-content-center">
      <Button
        className="btn btn-primary"
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <Button
        className="btn btn-primary ms-2"
        onClick={onNextPage}
        disabled={indexOfLastItem >= totalItems}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;