import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard(props) {
  const { index, image, name } = props;

  return (
    <div className="card" data-testid={ `${index}-recipe-card` }>
      <img
        className="card-recipe"
        data-testid={ `${index}-card-img` }
        src={ image }
        alt="img"
      />
      <p className="card-name" data-testid={ `${index}-card-name` }>{ name }</p>
    </div>
  );
}

RecipeCard.propTypes = {
  index: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default RecipeCard;
