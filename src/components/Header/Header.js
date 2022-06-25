import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header({ namePage, isEnable }) {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <header className="divHeader">
      <div className="header">
        <Link to="/profile">
          <button
            className="buttonIcon"
            type="button"
          >
            <img
              className="imgIcon"
              src={ profileIcon }
              alt="profile button"
              data-testid="profile-top-btn"
            />
          </button>
        </Link>
        <h1 className="titlePage" data-testid="page-title">{ namePage }</h1>
        { isEnable && (
          <button
            className="buttonIcon"
            type="button"
            onClick={ () => setSearchBar(!searchBar) }
          >
            <img
              className="imgIcon"
              src={ searchIcon }
              alt="search button"
              data-testid="search-top-btn"
            />
          </button>
        )}
      </div>
      <div className="searchBar">
        { searchBar && <SearchBar /> }
      </div>
    </header>
  );
}

Header.propTypes = {
  namePage: PropTypes.string.isRequired,
  isEnable: PropTypes.bool,
};

Header.defaultProps = {
  isEnable: true,
};

export default Header;
