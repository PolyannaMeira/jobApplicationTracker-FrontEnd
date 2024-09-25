import { useState } from "react";
import Api from "../../Api";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  let debounceTimer;

  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(async () => {
      if (query) {
        const results = await Api.searchJobs(query);
        setFilteredData(results);
      } else {
        setFilteredData([]); // Reset if the query is empty
      }
    }, 300); // Adjust the debounce time as needed
  };

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        value={searchQuery}
      />
      <span className="search-icon">🔍</span>
      <div className="search-results">
        {filteredData.map((item, index) => (
          <div key={index} className="search-item">
            {item.companyName} - {item.jobRole}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
