import React from 'react';
import shareIcon from '../../images/shareIcon.svg';

function ButtonCompartilhar() {
  return (
    <button
      type="button"
    >
      <img
        src={ shareIcon }
        alt="icone Compartilhar"
        data-testid="share-btn"
      />
    </button>
  );
}

export default ButtonCompartilhar;
