import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductDetailsContext from './ProductDetailsContext';

const NUMERO_SETE = 7;
const NUMERO_SEIS = 6;
const RECOMENDACAO_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function FoodDetailsProvider({ children }) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
  const history = useHistory();

  const [idUrl, setIdUrl] = useState('');
  const [detailFood, setDetailFood] = useState(null);
  const [RecomendadosDrink, setRecommendadosDrink] = useState([]);

  useEffect(() => {
    const detailApiFoodId = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idUrl}`,
        );
        const dataApi = await response.json();
        setDetailFood(dataApi.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    detailApiFoodId();
  }, [idUrl]);

  useEffect(() => {
    setIdUrl(history.location.pathname.substr(NUMERO_SETE));
  }, [history.location.pathname]);

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
