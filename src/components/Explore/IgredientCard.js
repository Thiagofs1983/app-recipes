import React from 'react';
import PropTypes from 'prop-types';

function IgredientCard({ name, image, testId, testImage, testName, handleClick }) {
  return (
    <button
      type="button"
      data-testid={ testId }
      onClick={ handleClick }
    >
      <img
        src={ image }
        alt={ `Foto do ${name}` }
        data-testid={ testImage }
      />
      <span data-testid={ testName }>{ name }</span>
    </button>
  );
}

IgredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  testImage: PropTypes.string.isRequired,
  testName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default IgredientCard;
