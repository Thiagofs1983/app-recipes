import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites(favoriteRecipes);
  }, []);

  const onClickAll = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites(favoriteRecipes);
  };

  const onClickFilterFood = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const filtered = favoriteRecipes.filter(({ type }) => type === 'food');
    setFavorites(filtered);
  };

  const onClickFilterDrink = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const filtered = favoriteRecipes.filter(({ type }) => type === 'drink');
    setFavorites(filtered);
  };

  return (
    <div>
      <Header
        namePage="Favorite Recipes"
        isEnable={ false }
      />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => onClickAll() }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => onClickFilterFood() }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => onClickFilterDrink() }
        >
          Drinks
        </button>
      </div>
      <div>
        {favorites && favorites.length > 0
        && favorites.map((
          { id, type, nationality, category, alcoholicOrNot, name, image }, index,
        ) => (
          <div key={ id }>
            <input
              type="image"
              src={ image }
              alt={ name }
              data-testid={ `${index}-horizontal-image` }
            />
            <div>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot }
              </p>
              <h4
                role="presentation"
                data-testid={ `${index}-horizontal-name` }

              >
                {name}
              </h4>
              <input
                type="image"
                src={ shareIcon }
                alt="Share Icon"
                data-testid={ `${index}-horizontal-share-btn` }
              />
              <input
                type="image"
                src={ blackHeartIcon }
                alt="Favorite Icon"
                data-testid={ `${index}-horizontal-favorite-btn` }
              />
            </div>
          </div>))}
      </div>
    </div>
  );
}

export default FavoriteRecipes;
