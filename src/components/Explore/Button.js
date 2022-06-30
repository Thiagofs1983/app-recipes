import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function ButtonExplore({ handleClick, buttonText, testId }) {
  return (
    <button
      className="buttonExplore"
      type="button"
      onClick={ handleClick }
      data-testid={ testId }
    >
      { buttonText }

    </button>
  );
}

ButtonExplore.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default ButtonExplore;
