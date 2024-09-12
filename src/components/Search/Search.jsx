import  { useState } from 'react';
import PropTypes from "prop-types";
import './Search.css';

const Search = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter data based on search query
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
      <div className="search-results">
        {filteredData.map((item, index) => (
          <div key={index} className="search-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
Search.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Search;

