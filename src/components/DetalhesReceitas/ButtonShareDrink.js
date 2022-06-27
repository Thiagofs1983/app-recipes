import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

function ButtonShareDrink() {
  const history = useHistory();
  const [copyShare, setCopyShare] = useState('');

  const clickShareDrink = () => {
    copy(`${window.location.origin}${history.location.pathname}`);
    setCopyShare('Link copied!');
  };

  return (
    <div>
      <button
        className="buttonFav"
        type="button"
        onClick={ clickShareDrink }
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

export default ButtonShareDrink;
