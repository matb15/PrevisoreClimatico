import React from "react";
import { FaSearch } from "react-icons/fa";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Previsore Climatico</div>
      <div className="search-container">
        <input type="text" placeholder="Cerca..." />
        <button>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
