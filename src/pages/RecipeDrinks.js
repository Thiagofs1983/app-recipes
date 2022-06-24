import React, { useContext, useEffect } from 'react';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
// import React from 'react';

function RecipeDrinks() {
  const { setVisibleStart, setNameButton } = useContext(ProductDetailsContext);

  useEffect(() => {
    if (localStorage.getItem('inProgressRecipes') !== null) {
      setVisibleStart(false);
      setNameButton(false);
    }
  }, []);

  return (
    <div>
      RecipeDrinks
    </div>
  );
}

export default RecipeDrinks;
