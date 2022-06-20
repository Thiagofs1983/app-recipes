import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="ingredient-search">
        Ingredient
        <input
          type="radio"
          id="ingredient-search"
          data-testid="ingredient-search-radio"
          name="search-method"
        />
      </label>
      <label htmlFor="name-search">
        Name
        <input
          type="radio"
          id="name-search"
          data-testid="name-search-radio"
          name="search-method"
        />
      </label>
      <label htmlFor="first-letter-search">
        First Letter
        <input
          type="radio"
          id="first-letter-search"
          data-testid="first-letter-search-radio"
          name="search-method"
        />
      </label>
      <button data-testid="exec-search-btn" type="submit">Search</button>
    </div>
  );
}

export default SearchBar;
