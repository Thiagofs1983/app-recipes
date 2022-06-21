import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductDetailsContext from './ProductDetailsContext';

const NUMERO_SETE = 7;

function FoodDetailsProvider({ children }) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
  const history = useHistory();

  console.log(history.location.pathname.substr(NUMERO_SETE));
  const [idUrl, setIdUrl] = useState('');
  const [detailFood, setDetailFood] = useState([]);
  console.log(detailFood);

  useEffect(() => {
    const detailApiFoodId = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idUrl}`,
        );
        const dataApi = await response.json();
        setDetailFood(dataApi.meals);
      } catch (error) {
        console.log(error);
      }
    };
    detailApiFoodId();
  }, [idUrl]);

  useEffect(() => {
    setIdUrl(history.location.pathname.substr(NUMERO_SETE));
  }, [history.location.pathname]);

  const context = {
    detailFood,
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
