import React from "react";
import "../css/Navbar.css";

const Navbar = ({ onSearch, onInputChange }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">Previsore Climatico</div>
        <div className="search-container">
          <input type="text" placeholder="Cerca..." onChange={onInputChange} />
          <button onClick={onSearch}>Cerca</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
