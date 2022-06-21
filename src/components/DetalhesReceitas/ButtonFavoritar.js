import React from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function ButtonFavoritar() {
  return (
    <div>
      <img
        src={ whiteHeartIcon }
        alt="botão favoritar"
        data-testid="favorite-btn"
      />
    </div>
  );
}

export default ButtonFavoritar;
