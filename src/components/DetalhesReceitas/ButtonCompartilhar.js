import React from 'react';
import shareIcon from '../../images/shareIcon.svg';

function ButtonCompartilhar() {
  return (
    <div>
      <img
        src={ shareIcon }
        alt="icone Compartilhar"
        data-testid="share-btn"
      />
    </div>
  );
}

export default ButtonCompartilhar;
