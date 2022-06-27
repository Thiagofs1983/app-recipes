import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ButtonShareFood() {
  const history = useHistory();
  const [copyShare, setCopyShare] = useState('');

  const clickShareFood = () => {
    copy(`${window.location.origin}${history.location.pathname}`);
    setCopyShare('Link copied!');
  };

  return (
    <div>
      <button
        className="buttonFav"
        type="button"
        onClick={ clickShareFood }
      >
        <img
          src={ shareIcon }
          alt="icone Compartilhar"
          data-testid="share-btn"
        />
      </button>
      <p>{copyShare}</p>
    </div>
  );
}

export default ButtonShareFood;
