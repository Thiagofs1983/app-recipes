import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import FoodDrinkContext from './FoodDrinkContext';
import useRequestApiFilter from '../../hook/useRequestApiFilter';

const FOOD_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const CATEGORY_FOOD_API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const MEALS_INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const CATEGORY_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const DRINKS_INGREDIENTS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

const NUMBER_TWELVE = 12;
const NUMBER_FIVE = 5;

function FoodDrinkProvider({ children }) {
  const history = useHistory();
  const [input, setInput] = useState('');
  const [checkbox, setCheckbox] = useState('');
  const [dataFood, setDataFood] = useState([]);
  const [category, setCategory] = useState('');
  const [dataDrink, setDataDrink] = useState([]);
  const [btnFilter, setBtnFilter] = useState(false);
  const [listRecipes, setListRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [categoryFood, setCategoryFood] = useState([]);
  const [categoryDrink, setCategoryDrink] = useState([]);
  const [selectItemFilter, setSelectItemFilter] = useState('');
  const [drinksIngredients, setDrinksIngredients] = useState([]);

  useRequestApiFilter(FOOD_API, 'meals', setDataFood, NUMBER_TWELVE);

  useRequestApiFilter(DRINK_API, 'drinks', setDataDrink, NUMBER_TWELVE);

  useRequestApiFilter(CATEGORY_FOOD_API, 'meals', setCategoryFood, NUMBER_FIVE);

  useRequestApiFilter(CATEGORY_DRINK_API, 'drinks', setCategoryDrink, NUMBER_FIVE);

  useRequestApiFilter(MEALS_INGREDIENTS, 'meals', setIngredients, NUMBER_TWELVE);

  useRequestApiFilter(DRINKS_INGREDIENTS, 'drinks', setDrinksIngredients, NUMBER_TWELVE);

  const handleClickFilterCategoryFood = async ({ target }) => {
    const { name } = target;
    setSelectItemFilter(name);
    if (name !== selectItemFilter) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
      const dataApi = await response.json();
      const filterCategoryFood = dataApi.meals
        .filter((food, index) => index < NUMBER_TWELVE);
      setDataFood(filterCategoryFood);
    }

    if (name === selectItemFilter) {
      const response = await fetch(FOOD_API);
      const dataApi = await response.json();
      const filterCategoryFood = dataApi.meals
        .filter((food, index) => index < NUMBER_TWELVE);
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
        .filter((drink, index) => index < NUMBER_TWELVE);

      setDataDrink(filterCategoryDrinks);
    }

    if (name === selectItemFilter) {
      const response = await fetch(DRINK_API);
      const dataApi = await response.json();
      const filterCategoryDrinks = dataApi.drinks
        .filter((drink, index) => index < NUMBER_TWELVE);

      setDataDrink(filterCategoryDrinks);
    }
  };

  const handleClickCategoryAllDrink = async () => {
    try {
      const response = await fetch(DRINK_API);
      const dataApi = await response.json();
      const filterDrinks = dataApi.drinks
        .filter((food, index) => index < NUMBER_TWELVE);
      setDataDrink(filterDrinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickCategoryAllFood = async () => {
    try {
      const response = await fetch(FOOD_API);
      const dataApi = await response.json();
      const filterFoods = dataApi.meals.filter((food, index) => index < NUMBER_TWELVE);
      setDataFood(filterFoods);
    } catch (error) {
      console.log(error);
    }
  };

  const clickDrinkIngredient = async (name) => {
    const DRINKS_PER_INGREDIENT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`;
    try {
      const response = await fetch(DRINKS_PER_INGREDIENT);
      const { drinks } = await response.json();
      const drinksPerIngredients = drinks.filter((drink, index) => index < NUMBER_TWELVE);
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
      const mealsPerIngredients = meals.filter((drink, index) => index < NUMBER_TWELVE);
      setDataFood([...mealsPerIngredients]);
    } catch (e) {
      console.log(e);
    }
    history.push('/foods');
  };

  const contextValue = {
    input,
    checkbox,
    dataFood,
    dataDrink,
    ingredients,
    categoryFood,
    categoryDrink,
    drinksIngredients,
    clickMealsIngredient,
    clickDrinkIngredient,
    category,
    listRecipes,
    btnFilter,
    handleClickFilterCategoryFood,
    handleClickFilterCategoryDrink,
    handleClickCategoryAllDrink,
    handleClickCategoryAllFood,
    setInput,
    setCheckbox,
    setListRecipes,
    setCategory,
    setBtnFilter,
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
