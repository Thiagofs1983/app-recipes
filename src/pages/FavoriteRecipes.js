import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import Header from '../components/Header/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import './pagesCss/Favorite.css';

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);
  const [isShared, setIsShared] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites(favoriteRecipes);
  }, []);

  const onClickShare = (type, id) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setIsShared(true);
  };

  const removeFavorites = (index) => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favId = favoriteRecipes[index].id;
    const newFavorites = favoriteRecipes.filter(({ id }) => id !== favId);
    setFavorites(newFavorites);
    localStorage.setItem('favoriteRecipes', JSON
      .stringify(newFavorites));
  };

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
      <main className="mainFav">
        <div className="divBtnFav">
          <button
            className="btnFav"
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ () => onClickAll() }
          >
            All
          </button>
          <button
            className="btnFav"
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => onClickFilterFood() }
          >
            Food
          </button>
          <button
            className="btnFav"
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => onClickFilterDrink() }
          >
            Drinks
          </button>
        </div>
        <div className="divFav">
          {favorites && favorites.length > 0
        && favorites.map((
          { id, type, nationality, category, alcoholicOrNot, name, image }, index,
        ) => (
          <div className="divFavCard" key={ id }>
            <input
              className="inputFav"
              type="image"
              src={ image }
              alt={ name }
              data-testid={ `${index}-horizontal-image` }
              width="150px"
              onClick={ type === 'food'
                ? () => history.push(`/foods/${id}`)
                : () => history.push(`/drinks/${id}`) }
            />
            <div className="divFavCardRecipe">
              <div className="divText">
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot }
                </p>
                <h4
                  role="presentation"
                  data-testid={ `${index}-horizontal-name` }
                  onClick={ type === 'food'
                    ? () => history.push(`/foods/${id}`)
                    : () => history.push(`/drinks/${id}`) }
                >
                  {name}
                </h4>
              </div>
              <div className="divBtnFavs">
                <input
                  className="btnInputFavs"
                  type="image"
                  src={ shareIcon }
                  alt="Share Icon"
                  data-testid={ `${index}-horizontal-share-btn` }
                  onClick={ () => onClickShare(type, id) }
                />
                { isShared && <p>Link copied!</p> }
                <input
                  className="btnInputFavs"
                  type="image"
                  src={ blackHeartIcon }
                  alt="Favorite Icon"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  onClick={ () => removeFavorites(index) }
                />
              </div>
            </div>
          </div>))}
        </div>
      </main>
    </div>
  );
}

export default FavoriteRecipes;
