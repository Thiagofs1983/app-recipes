import React from 'react';
import PropTypes from 'prop-types';
import './Ingredient.css';

function IngredientCard({ name, image, testId, testImage, testName, handleClick }) {
  return (
    <button
      className="buttonIngredient"
      type="button"
      data-testid={ testId }
      onClick={ handleClick }
    >
      <img
        className="imgIngredient"
        src={ image }
        alt={ `Foto do ${name}` }
        data-testid={ testImage }
      />
      <span className="nameIngredient" data-testid={ testName }>{ name }</span>
    </button>
  );
}

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  testImage: PropTypes.string.isRequired,
  testName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default IngredientCard;
