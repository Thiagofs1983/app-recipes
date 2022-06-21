import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

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

      { isEnable && (
      <div>
        <input
          type="image"
          data-testid="search-top-btn"

          src={ searchIcon }
          alt="search button"
          onClick={ () => setSearchBar(!searchBar) }
        />

        { searchBar && <p data-testid="search-input">Mostrar Barra</p> }
      </div>
      ) }

    </header>
  );
}

export default Header;
