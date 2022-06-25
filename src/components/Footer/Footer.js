import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/drinks">
        <img
          className="footerIcon"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drinkIcon"
        />
      </Link>
      <Link to="/explore">
        <img
          className="footerIcon"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="drinkIcon"
        />
      </Link>
      <Link to="/foods">
        <img
          className="footerIcon"
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="drinkIcon"
        />
      </Link>
    </footer>
  );
}

export default Footer;
