import React, { useState } from "react";
import logo from "../assets/logo.png";

const NavBar = ({ onSearch }) => {
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("bg-dark", newTheme === "dark");
    document.body.classList.toggle("text-light", newTheme === "dark");
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term, searchType);
  };

  const handleSearchTypeChange = (event) => {
    const type = event.target.value;
    setSearchType(type);
    onSearch(searchTerm, type); 
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="logo" width="30" height="30" className="me-2" />
          <span className="fs-4">Blog Web</span>
        </a>

        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <select
            className="form-select me-2"
            value={searchType}
            onChange={handleSearchTypeChange}
          >
            <option value="title">Título</option>
            <option value="author">Autor</option>
            <option value="content">Contenido</option>
          </select>

          <button className="btn btn-link text-decoration-none" onClick={toggleTheme}>
            {theme === "light" ? (
              <i className="bi bi-moon-fill"></i>
            ) : (
              <i className="bi bi-sun-fill"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
