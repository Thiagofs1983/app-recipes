import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer data-testid="footer">
      Footer
      <Link to="/drinks">
        <p data-testid="drinks-bottom-btn">Drinks</p>
      </Link>
      <Link to="/explore">
        <p data-testid="explore-bottom-btn">Explore</p>
      </Link>
      <Link to="/foods">
        <p data-testid="food-bottom-btn">Food</p>
      </Link>
    </footer>
  );
}

export default Footer;
