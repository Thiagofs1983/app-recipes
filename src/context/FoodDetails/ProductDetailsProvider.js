import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductDetailsContext from './ProductDetailsContext';

const NUMERO_SETE = 7;
const NUMERO_OITO = 8;
const NUMBER_RECOMMENDED = 6;

function FoodDetailsProvider({ children }) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
  const history = useHistory();
  const [idUrlFood, setIdUrlFood] = useState('');
  const [detailFood, setDetailFood] = useState([]);
  const [idUrlDrink, setIdUrlDrink] = useState('');
  const [detailDrink, setDetailDrink] = useState([]);
  const [recommendedFood, setRecommendedFood] = useState([]);

  useEffect(() => {
    const detailApiFoodId = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idUrlFood}`);
        const dataApi = await response.json();
        setDetailFood(dataApi.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    detailApiFoodId();
  }, [idUrlFood]);

  useEffect(() => {
    setIdUrlFood(history.location.pathname.substr(NUMERO_SETE));
  }, [history.location.pathname]);

  useEffect(() => {
    const detailApiDrinkId = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idUrlDrink}`);
        const dataApi = await response.json();
        setDetailDrink(dataApi.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    detailApiDrinkId();
  }, [idUrlDrink]);
  console.log(detailDrink);

  useEffect(() => {
    setIdUrlDrink(history.location.pathname.substr(NUMERO_OITO));
  }, [history.location.pathname]);

  useEffect(() => {
    const recommendedFoodsAPi = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const dataApi = await response.json();
        const filteredDrinks = await dataApi.meals
          .filter((_meals, index) => index < NUMBER_RECOMMENDED);
        setRecommendedFood(filteredDrinks);
      } catch (error) {
        console.log(error);
      }
    };
    recommendedFoodsAPi();
  }, []);
  console.log(recommendedFood);

  const context = {
    detailFood,
    detailDrink,
    recommendedFood,
  };

  return (
    <ProductDetailsContext.Provider value={ context }>
      { children }
    </ProductDetailsContext.Provider>
  );
}

FoodDetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodDetailsProvider;
