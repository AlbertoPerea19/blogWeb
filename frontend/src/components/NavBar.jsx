import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";

const NavBar = ({ onSearch }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("bg-dark", newTheme === "dark");
    document.body.classList.toggle("text-light", newTheme === "dark");
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    onSearch(term);
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
            onChange={handleSearch}
          />

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
