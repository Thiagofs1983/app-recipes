import React, { useContext, useState, useEffect } from 'react';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritar from '../components/DetalhesReceitas/ButtonFavoritar';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import './Details.css';

function DetailsDrinks() {
  const { detailDrink, recommendedFood } = useContext(ProductDetailsContext);
  const [ingredientesData, setingredientesData] = useState([]);
  const [measure, setMeasures] = useState([]);
  console.log(detailDrink);

  useEffect(() => {
    const ingredientes = [];
    setingredientesData(ingredientes);
    console.log(Object.entries(detailDrink));
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
          <ButtonCompartilhar />
          <ButtonFavoritar />
        </div>
      </div>
      <div>
        <h6 data-testid="recipe-category">{detailDrink?.strAlcoholic}</h6>
      </div>
      <div>
        <h2
          data-testid={ `${0}-ingredient-name-and-measure` }
        >
          Ingredients
        </h2>
        { ingredientesData.map((ingredients, index) => (
          <p key={ index }>
            {`- ${ingredients} - ${measure[index]}`}
          </p>
        ))}
      </div>
      <div>
        <h2>Instructions</h2>
        <h3 data-testid="instructions">{detailDrink?.strInstructions}</h3>
      </div>
      <div className="scrollmenu">
        <h6>Recommended</h6>
        {
          recommendedFood.map((food, index) => (
            <div
              data-testid={ `${index}-recomendation-card` }
              className="divDrinks"
              key={ index }
            >
              <img src={ food.strMealThumb } alt={ food.strMeal } />
              <p>{food.strCategory}</p>
              <h5
                data-testid={ `${index}-recomendation-title` }
              >
                {food.strMeal}
              </h5>
            </div>))
        }
      </div>
      <button
        className="button1"
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </button>
    </section>
  );
}

export default DetailsDrinks;
