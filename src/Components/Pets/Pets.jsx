import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pets.css";
const Pets = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="pets">
      <div className="category-dropdown">
        <button onClick={toggleMenu}>Pet Categories</button>
        {menuOpen && (
          <ul className="category-menu">
            <li>
              <Link to="/cats" style={{ textDecoration: "none" }}>
                Cats
              </Link>
            </li>
            
            <li>
              <Link to="/fishs" style={{ textDecoration: "none" }}>
                Fishs
              </Link>
            </li>

            <li>
              <Link to="/ducks" style={{ textDecoration: "none" }}>
                Ducks
              </Link>
            </li>

            <li>
              <Link to="/birds" style={{ textDecoration: "none" }}>
                Birds
              </Link>
            </li>

            <li>
              <Link to="/dogs" style={{ textDecoration: "none" }}>
                Dogs
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Pets;
