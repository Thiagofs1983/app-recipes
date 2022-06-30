import React from 'react';
import PropTypes from 'prop-types';

function Button({ handleClick, buttonText, disabled, testId }) {
  return (
    <button
      type="button"
      disabled={ disabled }
      onClick={ handleClick }
      data-testid={ testId }
      className="buttonLogin"
    >
      { buttonText }
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Button;
