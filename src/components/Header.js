import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <header>
      <Link to="/profile">
        <button
          type="button"
          data-testid="profile-top-btn"
        >
          <img src={ profileIcon } alt="profile button" />
        </button>
      </Link>

      <h1 data-testid="page-title">T1tle</h1>

      <div>
        <button
          type="button"
          data-testid="search-top-btn"
          onClick={ () => setSearchBar(!searchBar) }
        >
          <img src={ searchIcon } alt="search button" />
        </button>
        { searchBar && <p data-testid="search-input">Mostrar Barra</p> }
      </div>

    </header>
  );
}

export default Header;
