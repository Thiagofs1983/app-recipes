import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import FoodDrinkContext from './FoodDrinkContext';

const FOOD_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const CATEGORY_FOOD_API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const MEALS_INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const CATEGORY_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
// const FITER_FROM_CATEGORY = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
const DRINKS_INGREDIENTS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

const NUMBER_DOZE = 12;
const NUMBER_CINCO = 5;

function FoodDrinkProvider({ children }) {
  const history = useHistory();
  const [dataFood, setDataFood] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [categoryFood, setCategoryFood] = useState([]);
  const [categoryDrink, setCategoryDrink] = useState([]);
  const [selectItemFilter, setSelectItemFilter] = useState('');
  const [drinksIngredients, setDrinksIngredients] = useState([]);

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
    const { name } = target;
    setSelectItemFilter(name);
    if (name !== selectItemFilter) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
      const dataApi = await response.json();
      const filterCategoryFood = dataApi.meals
        .filter((food, index) => index < NUMBER_DOZE);
      setDataFood(filterCategoryFood);
    }

    if (name === selectItemFilter) {
      const response = await fetch(FOOD_API);
      const dataApi = await response.json();
      const filterCategoryFood = dataApi.meals
        .filter((food, index) => index < NUMBER_DOZE);
      setDataFood(filterCategoryFood);
    }
  };

  const handleClickFilterCategoryDrink = async ({ target }) => {
    const { name } = target;
    setSelectItemFilter(name);
    if (name !== selectItemFilter) {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`,
      );
      const dataApi = await response.json();
      const filterCategoryDrinks = dataApi.drinks
        .filter((drink, index) => index < NUMBER_DOZE);

      setDataDrink(filterCategoryDrinks);
    }

    if (name === selectItemFilter) {
      const response = await fetch(DRINK_API);
      const dataApi = await response.json();
      const filterCategoryDrinks = dataApi.drinks
        .filter((drink, index) => index < NUMBER_DOZE);

      setDataDrink(filterCategoryDrinks);
    }
  };

  const handleClickCategoryAllDrink = async () => {
    try {
      const response = await fetch(DRINK_API);
      const dataApi = await response.json();
      const filterDrinks = dataApi.drinks
        .filter((food, index) => index < NUMBER_DOZE);
      setDataDrink(filterDrinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickCategoryAllFood = async () => {
    try {
      const response = await fetch(FOOD_API);
      const dataApi = await response.json();
      const filterFoods = dataApi.meals.filter((food, index) => index < NUMBER_DOZE);
      setDataFood(filterFoods);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const ApiIngredients = async () => {
      try {
        const response = await fetch(MEALS_INGREDIENTS);
        const { meals } = await response.json();
        const mealsIngredientsAPI = meals.filter(
          (igredient, index) => index < NUMBER_DOZE,
        );
        setIngredients([...mealsIngredientsAPI]);
      } catch (e) {
        console.log(e);
      }
    };
    ApiIngredients();
  }, []);

  useEffect(() => {
    const ApiDrinksIngredients = async () => {
      try {
        const response = await fetch(DRINKS_INGREDIENTS);
        const { drinks } = await response.json();
        const drinksIngredientsAPI = drinks.filter(
          (igredient, index) => index < NUMBER_DOZE,
        );
        setDrinksIngredients([...drinksIngredientsAPI]);
      } catch (e) {
        console.log(e);
      }
    };
    ApiDrinksIngredients();
  }, []);

  const clickDrinkIngredient = async (name) => {
    const DRINKS_PER_INGREDIENT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`;
    try {
      const response = await fetch(DRINKS_PER_INGREDIENT);
      const { drinks } = await response.json();
      const drinksPerIngredients = drinks.filter((drink, index) => index < NUMBER_DOZE);
      setDataDrink([...drinksPerIngredients]);
    } catch (e) {
      console.log(e);
    }
    history.push('/drinks');
  };

  const clickMealsIngredient = async (name) => {
    const MEALS_PER_INGREDIENT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;
    try {
      const response = await fetch(MEALS_PER_INGREDIENT);
      const { meals } = await response.json();
      const mealsPerIngredients = meals.filter((drink, index) => index < NUMBER_DOZE);
      setDataFood([...mealsPerIngredients]);
    } catch (e) {
      console.log(e);
    }
    history.push('/foods');
  };

  const contextValue = {
    dataFood,
    dataDrink,
    ingredients,
    categoryFood,
    categoryDrink,
    drinksIngredients,
    clickMealsIngredient,
    clickDrinkIngredient,
    handleClickFilterCategoryFood,
    handleClickFilterCategoryDrink,
    handleClickCategoryAllDrink,
    handleClickCategoryAllFood,
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
