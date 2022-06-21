import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ namePage, isEnable }) {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <header>
      <Link to="/profile">
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile button"
        />
      </Link>

      <h1 data-testid="page-title">{ namePage }</h1>

      {isEnable && (
        <div>
          <input
            type="image"
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="search button"
            onClick={ () => setSearchBar(!searchBar) }
          />

          { searchBar && <SearchBar /> }
        </div>
      )}

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
