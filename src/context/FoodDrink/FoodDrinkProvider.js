import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import FoodDrinkContext from './FoodDrinkContext';

const FOOD_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const CATEGORY_FOOD_API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const CATEGORY_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

function FoodDrinkProvider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [categoryFood, setCategoryFood] = useState([]);
  const [categoryDrink, setCategoryDrink] = useState([]);

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

  useEffect(() => {
    const apiCategoryFood = async () => {
      try {
        const response = await fetch(CATEGORY_FOOD_API);
        const dataApi = await response.json();
        setCategoryFood(dataApi);
      } catch (error) {
        console.log(error);
      }
    };
    apiCategoryFood();
  }, []);

  useEffect(() => {
    const apiCategoryDrink = async () => {
      try {
        const response = await fetch(CATEGORY_DRINK_API);
        const dataApi = await response.json();
        setCategoryDrink(dataApi);
      } catch (error) {
        console.log(error);
      }
    };
    apiCategoryDrink();
  }, []);

  const contextValue = {
    dataFood,
    dataDrink,
    categoryFood,
    categoryDrink,
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
