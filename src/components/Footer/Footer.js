import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <div>
        <Link className="divIcons" to="/drinks">
          <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drinkIcon" />
        </Link>
      </div>
      <div>
        <Link className="divIcons" to="/explore">
          <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="drinkIcon" />
        </Link>
      </div>
      <div>
        <Link className="divIcons" to="/foods">
          <img data-testid="food-bottom-btn" src={ mealIcon } alt="drinkIcon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
