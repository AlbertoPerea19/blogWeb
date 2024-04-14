import React from 'react';
import { Link } from 'react-router-dom';

const CardBlog = ({ entry }) => {
   const formattedDate = new Date(entry.created_at).toLocaleDateString('en-GB');
   const truncatedContent = entry.content.substring(0, 70);

   return (
      <div className="card shadow-sm mb-4">
         <div className="card-body">
            <h5 className="card-title mb-3">{entry.title}</h5>
            <p className="card-text text-muted">{truncatedContent}...</p>
         </div>
         <div className="card-footer text-muted d-flex justify-content-between align-items-center">
            <div>
               <p className="mb-0">Author: {entry.author}</p>
               <p className="mb-0">Published: {formattedDate}</p>
            </div>
            <Link to={`/blog/${entry.id}`} className="btn btn-sm btn-primary">
              Read More
            </Link>
         </div>
      </div>
   );
};

export default CardBlog;
