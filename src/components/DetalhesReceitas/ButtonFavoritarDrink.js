import React, { useContext } from 'react';
import useLocalStorage from '../../hook/useLocalStorage';
import ProductDetailsContext from '../../context/FoodDetails/ProductDetailsContext';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
// https://usehooks.com/useLocalStorage/

function ButtonFavoritarDrink() {
  const { detailDrink } = useContext(ProductDetailsContext);
  // const [foodFavoritado, setfoodFavoritado] = useState([]);
  const [drink, setDrink] = useLocalStorage('favoriteRecipes', []);
  console.log(detailDrink);
  console.log(drink);

  const favoritarFood = () => {
    const favoriteDrink = {
      id: detailDrink?.idDrink,
      type: 'drink',
      nationality: detailDrink?.strArea,
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

export default ButtonFavoritarDrink;
