import React, { useContext } from 'react';
import useLocalStorage from '../../hook/useLocalStorage';
import ProductDetailsContext from '../../context/FoodDetails/ProductDetailsContext';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
// https://usehooks.com/useLocalStorage/

function ButtonFavoritarFood() {
  const { detailFood } = useContext(ProductDetailsContext);
  const [food, setFood] = useLocalStorage('favoriteRecipes', []);

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

  const RemoveFavorite = () => {
    const filterFavoritos = food
      .filter((fav) => fav.id !== detailFood?.idMeal);
    setFood(filterFavoritos);
  };

  return (
    <div>
      {food.some((dado) => dado.id === detailFood?.idMeal) ? (
        <button
          className="buttonFav"
          type="button"
          onClick={ RemoveFavorite }
        >
          <img
            src={ blackHeartIcon }
            alt="botão favoritar"
            data-testid="favorite-btn"
          />
        </button>
      ) : (
        <button
          className="buttonFav"
          type="button"
          onClick={ favoritarFood }
        >
          <img
            src={ whiteHeartIcon }
            alt="botão favoritar"
            data-testid="favorite-btn"
          />
        </button>
      )}
    </div>
  );
}

export default ButtonFavoritarFood;
