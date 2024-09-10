import { useState } from 'react';
import PropTypes from "prop-types";
import './Sort.css';

const Sort = ({ onSortChange }) => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState('Company Name'); // Default criteria
  const [sortOrder, setSortOrder] = useState(null);

  const sortToggleHandler = () => {
    setIsSortMenuOpen(!isSortMenuOpen);
  };

  const selectSortHandler = (criteria) => {
    setSortCriteria(criteria);
    setIsSortMenuOpen(false);
  };

  const sortHandler = (order) => {
    if (sortCriteria === 'Company Name') {
      setSortOrder(order);
      onSortChange(order);
    }
    setIsSortMenuOpen(false);
  };

  const getCheckMark = (option, type) => {
    if (type === 'criteria') {
      return sortCriteria === option ? '✔️' : '';
    }
    return sortOrder === option ? '✔️' : '';
  };

  return (
    <div className='sort-container'>
      <button className='sort-button' onClick={sortToggleHandler}>
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
            <div className="sort-separator"></div>
            <li onClick={() => sortHandler('Ascending')}>
              {getCheckMark('Ascending', 'order')} Ascending
            </li>
            <li onClick={() => sortHandler('Descending')}>
              {getCheckMark('Descending', 'order')} Descending
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
