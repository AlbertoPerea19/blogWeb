import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import placeholderImage from "../assets/placeholder.jpg";

const Blog = ({ getEntryById }) => {
  const { id } = useParams();
  const [entry, setEntry] = useState({});

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const entry = await getEntryById(id);
        setEntry(entry);
      } catch (error) {
        console.error("Error fetching blog entry:", error);
      }
    };
    fetchEntry();
  }, [getEntryById, id]);

  const formattedDate = new Date(entry.created_at).toLocaleDateString("en-GB");

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12 p-0 text-center">
          <img
            src={placeholderImage}
            alt="Blog Cover"
            className="img-fluid wh-100"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col text-center">
            <h1>{entry.title}</h1>
            <p>
              <strong>Author:</strong> {entry.author}
            </p>
            <p>
              <strong>Published:</strong> {formattedDate}
            </p>
          </div>
        </div>

        <div className="row mt-4">
            <div>
              <p>{entry.content}</p>
            </div>
        </div>
      </div>

      <div className="container mt-4">
            <footer className="footer mt-auto py-3 text-center">
               <div className="container">
                  <p>&copy; {new Date().getFullYear()} Mi Blog</p>
               </div>
            </footer>
      </div>
    </div>
  );
};

export default Blog;
