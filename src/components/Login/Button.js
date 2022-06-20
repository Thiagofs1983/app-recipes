import React from 'react';

function Button(handleClick, buttonText, disabled) {
  return (
    <button
      type="button"
      disabled={ disabled }
      onClick={ handleClick }
    >
      { buttonText }
    </button>
  );
}

export default Button;
