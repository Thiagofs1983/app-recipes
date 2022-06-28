import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductDetailsContext from './ProductDetailsContext';
import useLocalStorage from '../../hook/useLocalStorage';
import useRequestApiFilter from '../../hook/useRequestApiFilter';

const NUMERO_SIX = 6;
const RECOMMENDED_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const RECOMMENDED_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function FoodDetailsProvider({ children }) {
  const history = useHistory();
  const [idUrl, setIdUrl] = useState('');
  const [detailFood, setDetailFood] = useState({});
  const [nameButton, setNameButton] = useState(true);
  const [detailDrink, setDetailDrink] = useState({});
  const [visibleStart, setVisibleStart] = useState(true);
  const [done, setDone] = useLocalStorage('doneRecipes', []);
  const [recommendedFood, setRecommendedFood] = useState([]);
  const [RecomendadosDrink, setRecommendadosDrink] = useState([]);
  const [progress, setProgress] = useLocalStorage('inProgressRecipes', {});

  useRequestApiFilter(RECOMMENDED_FOOD, 'meals', setRecommendedFood, NUMERO_SIX);

  useRequestApiFilter(RECOMMENDED_DRINKS, 'drinks', setRecommendadosDrink, NUMERO_SIX);

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

  const context = {
    done,
    idUrl,
    setDone,
    progress,
    nameButton,
    detailFood,
    setProgress,
    detailDrink,
    visibleStart,
    recommendedFood,
    RecomendadosDrink,
    setNameButton,
    setDetailFood,
    setVisibleStart,
    detailApiFoodId,
    detailApiDrinkId,
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
