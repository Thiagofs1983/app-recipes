import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductDetailsContext from './ProductDetailsContext';
import useLocalStorage from '../../hook/useLocalStorage';

const NUMERO_SEIS = 6;
const RECOMENDACAO_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function FoodDetailsProvider({ children }) {
  const history = useHistory();
  const [RecomendadosDrink, setRecommendadosDrink] = useState([]);
  const [idUrl, setIdUrl] = useState('');
  const [detailFood, setDetailFood] = useState({});
  const [detailDrink, setDetailDrink] = useState({});
  const [recommendedFood, setRecommendedFood] = useState([]);
  const [progress, setProgress] = useLocalStorage('inProgressRecipes', {});
  const [done, setDone] = useLocalStorage('doneRecipes', []);
  const [visibleStart, setVisibleStart] = useState(true);
  const [nameButton, setNameButton] = useState(true);

  const detailApiFoodId = async (idFood) => {
    history.push(`foods/${idFood}`);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`);
      const { meals } = await response.json();
      console.log(meals[0]);
      setDetailFood(meals[0]);
      setIdUrl(idUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const detailApiDrinkId = async (idDrink) => {
    history.push(`/drinks/${idDrink}`);
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
      const { drinks } = await response.json();
      console.log(drinks[0]);
      setDetailDrink(drinks[0]);
      setIdUrl(idUrl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const detailsFood = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idUrl}`);
        const { meals } = await response.json();
        setDetailFood(meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    detailsFood();
  }, [idUrl]);

  useEffect(() => {
    const detailsDrink = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idUrl}`);
        const { drinks } = await response.json();
        setDetailDrink(drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    detailsDrink();
  }, [idUrl]);

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
    visibleStart,
    setVisibleStart,
    progress,
    setProgress,
    detailFood,
    detailDrink,
    setDetailFood,
    detailApiFoodId,
    recommendedFood,
    RecomendadosDrink,
    detailApiDrinkId,
    idUrl,
    nameButton,
    setNameButton,
    done,
    setDone,
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
