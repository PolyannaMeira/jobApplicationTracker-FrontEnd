import  { useState } from "react";
import './Filter.css'

const Filter= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Filter"); // Valor padrão do botão

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setIsMenuOpen(false);
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={toggleMenu}>
        <span>{selectedFilter}</span> <span className="arrow">▼</span>
      </button>
      {isMenuOpen && (
        <ul className="filter-menu">
          <li onClick={() => handleFilterClick("Interview Planned")}>
            Interview Planned
          </li>
          <li onClick={() => handleFilterClick("Interview Not Planned")}>
            Interview Not Planned
          </li>
          <li onClick={() => handleFilterClick("Favorites")}>Favorites</li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
