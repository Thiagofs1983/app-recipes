import React, { useContext } from 'react';
import useLocalStorage from '../../hook/useLocalStorage';
import ProductDetailsContext from '../../context/FoodDetails/ProductDetailsContext';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import '../../pages/pagesCss/Details.css';
// https://usehooks.com/useLocalStorage/

function ButtonFavoritarDrink() {
  const { detailDrink } = useContext(ProductDetailsContext);
  const [drink, setDrink] = useLocalStorage('favoriteRecipes', []);

  const favoritarDrink = () => {
    const favoriteDrink = {
      id: detailDrink?.idDrink,
      type: 'drink',
      nationality: '',
      category: detailDrink?.strCategory,
      alcoholicOrNot: detailDrink?.strAlcoholic,
      name: detailDrink?.strDrink,
      image: detailDrink?.strDrinkThumb,
    };

    setDrink([
      ...drink,
      favoriteDrink,
    ]);
  };

  const RemoveFavorite = () => {
    console.log('olá');
    const filterFavoritos = drink
      .filter((fav) => fav.id !== detailDrink?.idDrink);
    setDrink(filterFavoritos);
  };

  return (
    <div>
      {drink.some((dado) => dado.id === detailDrink?.idDrink) ? (
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
          onClick={ favoritarDrink }
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

export default ButtonFavoritarDrink;
