import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ namePage, isEnable }) {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <header>
      <div>
        <Link to="/profile">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile button"
          />
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
        ) }
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
