import { useState } from 'react';
import PropTypes from "prop-types";
import './Sort.css';

const Sort = ({onSortChange}) => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState('Sort');

  const sortToggleHandler = () => {
    setIsSortMenuOpen(!isSortMenuOpen);
  };

  const selectSortHandler = (criteria) => {
    setSortCriteria(criteria);
    setIsSortMenuOpen(false);
    onSortChange(criteria);
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
        {sortCriteria}<span className="arrow">▼</span>
      </button>
      {isSortMenuOpen && (
          <ul className="sort-menu">
            <li onClick={() => selectSortHandler('Company Name')}>
              {getCheckMark('Company Name', 'criteria')} Company Name
            </li>
            <li onClick={() => selectSortHandler('Interview Date')}>
              {getCheckMark('Interview Date', 'criteria')} Interview Date
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
