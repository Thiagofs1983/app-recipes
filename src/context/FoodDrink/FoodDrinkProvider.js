import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import FoodDrinkContext from './FoodDrinkContext';

const FOOD_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const CATEGORY_FOOD_API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const CATEGORY_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
// const FITER_FROM_CATEGORY = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

const NUMBER_DOZE = 12;
const NUMBER_CINCO = 5;

function FoodDrinkProvider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [categoryFood, setCategoryFood] = useState([]);
  const [categoryDrink, setCategoryDrink] = useState([]);
  // const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    const apiFood = async () => {
      try {
        const response = await fetch(FOOD_API);
        const dataApi = await response.json();
        const filterFoods12 = dataApi.meals.filter((food, index) => index < NUMBER_DOZE);
        setDataFood(filterFoods12);
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
        const filterDrinks12 = dataApi.drinks
          .filter((food, index) => index < NUMBER_DOZE);
        setDataDrink(filterDrinks12);
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
        const filterCategoryFood = dataApi.meals
          .filter((food, index) => index < NUMBER_CINCO);
        setCategoryFood(filterCategoryFood);
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
        const filterCategoryDrinks = dataApi.drinks
          .filter((food, index) => index < NUMBER_CINCO);
        setCategoryDrink(filterCategoryDrinks);
      } catch (error) {
        console.log(error);
      }
    };
    apiCategoryDrink();
  }, []);

  const handleClickFilterCategoryFood = async ({ target }) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${target.name}`);
      const dataApi = await response.json();
      const filterCategoryFood = dataApi.meals
        .filter((food, index) => index < NUMBER_DOZE);
      setDataFood(filterCategoryFood);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickFilterCategoryDrink = async ({ target }) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.name}`,
      );
      const dataApi = await response.json();
      const filterCategoryDrinks = dataApi.drinks
        .filter((drink, index) => index < NUMBER_DOZE);
      setDataDrink(filterCategoryDrinks);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    dataFood,
    dataDrink,
    categoryFood,
    categoryDrink,
    handleClickFilterCategoryFood,
    handleClickFilterCategoryDrink,
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
