import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <div>
        <Link className="divIcons" to="/drinks">
          <img src={ drinkIcon } alt="drinkIcon" />
          <p data-testid="drinks-bottom-btn">Drinks</p>
        </Link>
      </div>
      <div>
        <Link className="divIcons" to="/explore">
          <img src={ exploreIcon } alt="drinkIcon" />
          <p data-testid="explore-bottom-btn">Explore</p>
        </Link>
      </div>
      <div>
        <Link className="divIcons" to="/foods">
          <img src={ mealIcon } alt="drinkIcon" />
          <p data-testid="food-bottom-btn">Food</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
