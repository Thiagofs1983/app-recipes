import React from 'react';
import PropTypes from 'prop-types';

function IgredientCard({ name, image }) {
  return (
    <div data-testid={ testId }>
      <img src={ image } alt={ `Foto do ${name}` } />
      <span>{ name }</span>
    </div>
  );
}

IgredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default IgredientCard;
