import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import FoodDrinkContext from './FoodDrinkContext';

const FOOD_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function FoodDrinkProvider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);

  useEffect(() => {
    const apiFood = async () => {
      try {
        const response = await fetch(FOOD_API);
        const dataApi = await response.json();
        setDataFood(dataApi.meals);
      } catch (error) {
        console.log(error);
      }
    };
    apiFood();
  }, []);

  useEffect(() => {
    const apiDrink = async () => {
      try {
        const response = await fetch(DRINK_API);
        const dataApi = await response.json();
        setDataDrink(dataApi.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    apiDrink();
  }, []);

  const contextValue = {
    dataFood,
    dataDrink,
  };

  return (
    <FoodDrinkContext.Provider value={ contextValue }>
      {children}
    </FoodDrinkContext.Provider>
  );
}

FoodDrinkProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default FoodDrinkProvider;
