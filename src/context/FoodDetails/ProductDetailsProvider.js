import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductDetailsContext from './ProductDetailsContext';

const NUMERO_SEIS = 6;
const RECOMENDACAO_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function FoodDetailsProvider({ children }) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
  const history = useHistory();

  const [RecomendadosDrink, setRecommendadosDrink] = useState([]);
  const [idUrl, setIdUrl] = useState('');
  const [detailFood, setDetailFood] = useState({});
  const [detailDrink, setDetailDrink] = useState({});
  const [recommendedFood, setRecommendedFood] = useState([]);

  const detailApiFoodId = async (idfood) => {
    history.push(`/foods/${idfood}`);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idfood}`);
      const { meals } = await response.json();
      console.log(meals[0]);
      setDetailFood(meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIdUrl(history.location.pathname.split('/')[2]);
  }, [history.location.pathname]);

  const detailApiDrinkId = async (idDrink) => {
    history.push(`/drinks/${idDrink}`);
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
      const { drinks } = await response.json();
      console.log(drinks[0]);
      setDetailDrink(drinks[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIdUrl(history.location.pathname.split('/')[2]);
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
    detailApiFoodId,
    detailApiDrinkId,
    idUrl,
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
