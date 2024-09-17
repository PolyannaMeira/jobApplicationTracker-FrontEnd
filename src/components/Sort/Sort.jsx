import { useState } from 'react';
import PropTypes from "prop-types";
import './Sort.css';

const Sort = () => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState('Company Name'); // Default criteria

  const sortToggleHandler = () => {
    setIsSortMenuOpen(!isSortMenuOpen);
  };

  const selectSortHandler = (criteria) => {
    setSortCriteria(criteria);
    setIsSortMenuOpen(false);
  };


  const getCheckMark = (option, type) => {
    if (type === 'criteria') {
      return sortCriteria === option ? '✔️' : '';
    }
  };

  return (
    <div className='sort-container'>
      <button className='sort-button' onClick={sortToggleHandler}>
      <img width="23" height="23" src="https://img.icons8.com/ios-filled/50/sorting-arrows.png" alt="sorting-arrows"/>
        Sort <span className="arrow">▼</span>
      </button>
      {isSortMenuOpen && (
          <ul className="sort-menu">
            <li onClick={() => selectSortHandler('Company Name')}>
              {getCheckMark('Company Name', 'criteria')} Company Name
            </li>
            <li>
              {getCheckMark('Interview Date', 'criteria')} Interview Date (Not implemented)
            </li>
          </ul>
      )}
    </div>
  );
};

Sort.propTypes = {
    onSortChange: PropTypes.func.isRequired
};

export default Sort;
