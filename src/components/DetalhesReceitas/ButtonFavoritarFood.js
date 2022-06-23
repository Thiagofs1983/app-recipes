import React, { useContext, useState } from 'react';
import useLocalStorage from '../../hook/useLocalStorage';
import ProductDetailsContext from '../../context/FoodDetails/ProductDetailsContext';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
// https://usehooks.com/useLocalStorage/

function ButtonFavoritarFood() {
  const { detailFood } = useContext(ProductDetailsContext);
  // const [foodFavoritado, setfoodFavoritado] = useState([]);
  const [food, setFood] = useLocalStorage('favoriteRecipes', []);
  const [clickFavorito, useClickFavorito] = useState(false);

  console.log(food);

  const favoritarFood = () => {
    const favoriteFod = {
      id: detailFood?.idMeal,
      type: 'food',
      nationality: detailFood?.strArea,
      category: detailFood?.strCategory,
      alcoholicOrNot: '',
      name: detailFood?.strMeal,
      image: detailFood?.strMealThumb,
    };

    setFood([
      ...food,
      favoriteFod,
    ]);
  };

  return (
    <button
      type="button"
      onClick={ favoritarFood }
    >
      <img
        src={ whiteHeartIcon }
        alt="botão favoritar"
        data-testid="favorite-btn"
      />
    </button>
  );
}

export default ButtonFavoritarFood;
