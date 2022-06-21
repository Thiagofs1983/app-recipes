import React from 'react';
import PropTypes from 'prop-types';

function IgredientCard({ name, image, testId, testImage, testName }) {
  return (
    <div data-testid={ testId }>
      <img
        src={ image }
        alt={ `Foto do ${name}` }
        data-testid={ testImage }
      />
      <span data-testid={ testName }>{ name }</span>
    </div>
  );
}

IgredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  testImage: PropTypes.string.isRequired,
  testName: PropTypes.string.isRequired,
};

export default IgredientCard;
