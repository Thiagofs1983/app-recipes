import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ButtonShare from '../components/DetalhesReceitas/ButtonShare';
import ButtonFavoritarDrink from '../components/DetalhesReceitas/ButtonFavoritarDrink';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import './Details.css';

function DetailsDrinks() {
  const {
    detailDrink,
    recommendedFood,
    nameButton, setDone, done,
    setNameButton, setIdUrl,
  } = useContext(ProductDetailsContext);
  const [ingredientesData, setingredientesData] = useState([]);
  const [measure, setMeasures] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  setIdUrl(id);

  useEffect(() => {
    const ingredientes = [];
    setingredientesData(ingredientes);
    Object.entries(detailDrink).forEach(([key, value]) => {
      if (key.includes('strIngredient') && value !== '' && value !== null) {
        ingredientes.push(value);
      }
    });
  }, [detailDrink]);

  useEffect(() => {
    const quantidades = [];
    setMeasures(quantidades);
    Object.entries(detailDrink).forEach(([key, value]) => {
      if (key.includes('strMeasure') && value !== '' && value !== null) {
        quantidades.push(value);
      }
    });
  }, [detailDrink]);

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (getLocal?.cocktails[id]) {
      setNameButton(false);
    } else {
      localStorage.setItem(
        'inProgressRecipes', JSON.stringify({ cocktails: { [id]: [] } }),
      );
    }
  }, []);

  const handleStartClick = () => {
    setDone([]);
    history.push(`/drinks/${detailDrink?.idDrink}/in-progress`);
  };

  return (
    <section>
      <div>
        <img
          data-testid="recipe-photo"
          src={ detailDrink?.strDrinkThumb }
          alt={ detailDrink?.strGlass }
        />
      </div>
      <div>
        <h1 data-testid="recipe-title">{detailDrink?.strDrink}</h1>
        <div>
          <ButtonShare />
          <ButtonFavoritarDrink />
        </div>
      </div>
      <div>
        <h6 data-testid="recipe-category">{detailDrink?.strAlcoholic}</h6>
      </div>
      <div>
        <h2>
          Ingredients
        </h2>
        { ingredientesData.map((ingredients, index) => (
          <p data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
            {`- ${ingredients} - ${measure[index]}`}
          </p>
        ))}
      </div>
      <div>
        <h2>Instructions</h2>
        <h3 data-testid="instructions">{detailDrink?.strInstructions}</h3>
      </div>
      <h6>Recommended</h6>
      <div className="horizontal-scroll-wrapper">
        {
          recommendedFood.map((food, index) => (
            <div
              data-testid={ `${index}-recomendation-card` }
              className="divDrinks"
              key={ index }
            >
              <img
                data-testid="recipe-photo"
                src={ food.strMealThumb }
                alt={ food.strMeal }
              />
              <p data-testid="recipe-category">{food.strCategory}</p>
              <h3
                data-testid={ `${index}-recomendation-title` }
              >
                {food.strMeal}
              </h3>
            </div>))
        }
      </div>
      <div className="buttonStart">
        {
          done.length === 0 ? (
            <button
              className="button1"
              data-testid="start-recipe-btn"
              type="button"
              onClick={ handleStartClick }
            >
              { nameButton ? 'Start Recipe' : 'Continue Recipe' }
            </button>
          ) : <div />
        }
      </div>
    </section>
  );
}

export default DetailsDrinks;
