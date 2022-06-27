import React, { useContext, useState, useEffect } from 'react';
import ButtonShareDrink from '../components/DetalhesReceitas/ButtonShareDrink';
import ButtonFavoritarDrink from '../components/DetalhesReceitas/ButtonFavoritarDrink';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import IngredientCardCheckbox from '../components/Cards/IngredientCardCheckbox';
import './pagesCss/Details.css';

function RecipeDrinks() {
  const { detailDrink } = useContext(ProductDetailsContext);
  const [ingredientesData, setingreditentesData] = useState([]);
  const [measure, setMeasures] = useState([]);
  const [ingredientsFinish, setIngredientsFinish] = useState([]);

  console.log(ingredientsFinish);

  useEffect(() => {
    const ingredientes = [];
    setingreditentesData(ingredientes);
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
      {detailDrink !== {} && (
        <div className="detailsPage">
          <div>
            <img
              className="image"
              data-testid="recipe-photo"
              src={ detailDrink?.strDrinkThumb }
              alt={ detailDrink?.strDrink }
            />
          </div>
          <div className="divTitleButtons">
            <h1
              className="titleName"
              data-testid="recipe-title"
            >
              {detailDrink?.strDrink}
            </h1>
            <div className="divButtons">
              <ButtonShareDrink />
              <ButtonFavoritarDrink />
            </div>
          </div>
          <div>
            <p
              className="category"
              data-testid="recipe-category"
            >
              {detailDrink?.strCategory}
            </p>
          </div>
          <div className="divIngredients">
            <h2>Ingredients</h2>
            <div className="divCardIngred">
              {ingredientesData.map((ingredients, index) => (
                <IngredientCardCheckbox
                  key={ index }
                  index={ index }
                  testId={ `${index}-ingredient-step` }
                  ingredients={ ingredients }
                  measure={ measure }
                  arrIngredients={ setIngredientsFinish }
                />
              ))}
            </div>
          </div>
          <div className="divInstructionsRecipe">
            <h2>Instructions</h2>
            <p
              className="instructions"
              data-testid="instructions"
            >
              {detailDrink?.strInstructions}
            </p>
          </div>
          <button
            className="buttonRecipe"
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finish
          </button>
        </div>
      )}
    </section>
  );
}

export default RecipeDrinks;
