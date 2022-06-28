import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ButtonShare() {
  const history = useHistory();
  const [copyShare, setCopyShare] = useState('');

  const clickShareFood = () => {
    copy(`${window.location.origin}${history.location.pathname
      .split('/in-progress')[0]}`);
    setCopyShare('Link copied!');
  };

  return (
    <div>
      <button
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

export default ButtonShare;
