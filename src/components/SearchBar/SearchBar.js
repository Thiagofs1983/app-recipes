import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import searchApi from '../../services/searchApi';
import FoodDrinkContext from '../../context/FoodDrink/FoodDrinkContext';

function SearchBar() {
  const history = useHistory();

  const {
    checkbox,
    setCheckbox,
    input,
    setInput,
    category,
    setCategory,
    setListRecipes,
    setBtnFilter,
  } = useContext(FoodDrinkContext);

  const firstLetter = 'First Letter';
  const { location } = history;
  const { pathname } = location;

  useEffect(() => {
    const verifyPath = () => {
      if (pathname === '/foods') {
        setCategory('foods');
      } else {
        setCategory('drinks');
      }
      setBtnFilter(false);
      return category;
    };
    verifyPath();
  }, []);

  const getIdRecipes = (result) => {
    const { meals, drinks } = result;
    const maxNumber = 12;
    const keyObj = category === 'foods' ? meals : drinks;

    if (keyObj === null) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    const id = category === 'foods' ? meals[0].idMeal : drinks[0].idDrink;
    if (keyObj.length > 1) {
      setListRecipes(keyObj.slice(0, maxNumber));
    } else if (keyObj.length === 1) {
      return history.push(`/${category}/${id}`);
    }
  };

  const handleClick = async () => {
    if (checkbox === firstLetter && input.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const result = await searchApi(input, checkbox, category);
      getIdRecipes(result);
    }
    setBtnFilter(true);
  };

  return (
    <div className="search-bar-root">
      <input
        className="input"
        type="text"
        placeholder="Search"
        data-testid="search-input"
        onChange={ ({ target: { value } }) => setInput(value) }
      />
      <div>
        <label htmlFor="Ingredients">
          <input
            className="checkbox"
            id="Ingredients"
            type="radio"
            data-testid="ingredient-search-radio"
            value="Ingredients"
            checked={ checkbox === 'Ingredients' }
            onChange={ ({ target: { value } }) => setCheckbox(value) }
          />
          Ingredients
        </label>
        <label htmlFor="Name">
          <input
            className="checkbox"
            id="Name"
            type="radio"
            data-testid="name-search-radio"
            value="Name"
            checked={ checkbox === 'Name' }
            onChange={ ({ target: { value } }) => setCheckbox(value) }
          />
          Name
        </label>
        <label htmlFor="first-letter">
          <input
            className="checkbox"
            id="first-letter"
            type="radio"
            data-testid="first-letter-search-radio"
            value="First Letter"
            checked={ checkbox === firstLetter }
            onChange={ ({ target: { value } }) => setCheckbox(value) }
          />
          First Letter
        </label>
      </div>
      <button
        className="button"
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
