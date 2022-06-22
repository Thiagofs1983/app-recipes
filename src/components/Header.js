import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

function Header({ namePage, isEnable }) {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <header className="header">
      <div className="icons">
        <Link to="/profile">
          <button
            type="button"
          >
            <img
              src={ profileIcon }
              alt="profile button"
              data-testid="profile-top-btn"
            />
          </button>
        </Link>

        <h1 data-testid="page-title">{ namePage }</h1>

        { isEnable && (
          <button
            type="button"
            onClick={ () => setSearchBar(!searchBar) }
          >
            <img
              src={ searchIcon }
              alt="search button"
              data-testid="search-top-btn"
            />
          </button>
        )}
      </div>

      { searchBar && (
        <div>
          <input
            type="text"
            data-testid="search-input"
          />
        </div>
      ) }

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
