import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductDetailsContext from './ProductDetailsContext';

const NUMERO_SETE = 7;
const NUMERO_SEIS = 6;
const RECOMENDACAO_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const NUMERO_OITO = 8;

function FoodDetailsProvider({ children }) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
  const history = useHistory();

  const [RecomendadosDrink, setRecommendadosDrink] = useState([]);
  const [idUrlFood, setIdUrlFood] = useState('');
  const [detailFood, setDetailFood] = useState([]);
  const [idUrlDrink, setIdUrlDrink] = useState('');
  const [detailDrink, setDetailDrink] = useState([]);
  const [recommendedFood, setRecommendedFood] = useState([]);
  console.log(idUrlDrink, idUrlFood);

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
          .filter((_meals, index) => index < NUMERO_SEIS);
        setRecommendedFood(filteredDrinks);
      } catch (error) {
        console.log(error);
      }
    };
    recommendedFoodsAPi();
  }, []);

  useEffect(() => {
    const recomendedDrink = async () => {
      try {
        const response = await fetch(RECOMENDACAO_DRINKS);
        const dataApi = await response.json();
        const filterRecomend = dataApi.drinks
          .filter((drink, index) => index < NUMERO_SEIS);
        setRecommendadosDrink(filterRecomend);
      } catch (error) {
        console.log(error);
      }
    };
    recomendedDrink();
  }, []);

  const context = {
    detailFood,
    detailDrink,
    recommendedFood,
    RecomendadosDrink,
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
