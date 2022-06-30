import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';

function RecipeCard(props) {
  const { index, image, name } = props;

  return (
    <div className="recipeCard" data-testid={ `${index}-recipe-card` }>
      <img
        className="img-recipe"
        data-testid={ `${index}-card-img` }
        src={ image }
        alt="img"
      />
      <p className="name-recipe" data-testid={ `${index}-card-name` }>{ name }</p>
    </div>
  );
}

RecipeCard.propTypes = {
  index: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default RecipeCard;
