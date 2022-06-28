import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import Header from '../components/Header/Header';
import shareIcon from '../images/shareIcon.svg';
import './pagesCss/DoneRecipes.css';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [isShared, setIsShared] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const Recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(Recipes);
  }, []);

  const onClickShare = (type, id) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setIsShared(true);
  };

  const handleAll = () => {
    const Recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(Recipes);
  };

  const handleFood = () => {
    const Recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const filtered = Recipes.filter(({ type }) => type === 'food');
    setDoneRecipes(filtered);
  };

  const handleDrinks = () => {
    const Recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const filtered = Recipes.filter(({ type }) => type === 'drink');
    setDoneRecipes(filtered);
  };

  return (
    <div>
      <Header namePage="Done Recipes" isEnable={ false } />
      <div className="mainDone">
        <div className="divBtnDone">
          <button
            className="doneBtn"
            onClick={ () => handleAll() }
            data-testid="filter-by-all-btn"
            type="button"
          >
            All
          </button>
          <button
            className="doneBtn"
            onClick={ handleFood }
            data-testid="filter-by-food-btn"
            type="button"
          >
            Food
          </button>
          <button
            className="doneBtn"
            onClick={ handleDrinks }
            data-testid="filter-by-drink-btn"
            type="button"
          >
            Drinks
          </button>
        </div>
        <div className="divFav">
          {doneRecipes && doneRecipes.length > 0
        && doneRecipes.map((
          { id,
            type,
            nationality,
            category,
            alcoholicOrNot,
            name,
            image,
            doneDate,
            tags }, index,
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
            <div className="divText">
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot }
              </p>
              <input
                type="image"
                src={ shareIcon }
                alt="Share Icon"
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => onClickShare(type, id) }
              />
              { isShared && <p>Link copied!</p> }
              <h4
                role="presentation"
                data-testid={ `${index}-horizontal-name` }
                onClick={ type === 'food'
                  ? () => history.push(`/foods/${id}`)
                  : () => history.push(`/drinks/${id}`) }
              >
                {name}
              </h4>
              <p data-testid={ `${index}-horizontal-done-date` }>
                {doneDate}
              </p>
              <div className="doneTags">
                { type === 'food'
                  ? tags && tags.map((tag) => (
                    <span
                      key={ tag }
                      data-testid={ `${index}-${tag}-horizontal-tag` }
                    >
                      {tag}
                    </span>))
                  : null}
              </div>
            </div>
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default DoneRecipes;
