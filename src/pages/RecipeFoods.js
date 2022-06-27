import React, { useContext, useState, useEffect } from 'react';
import ButtonShareFood from '../components/DetalhesReceitas/ButtonShareFood';
import ButtonFavoritarFood from '../components/DetalhesReceitas/ButtonFavoritarFood';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import IngredientCardCheckbox from '../components/Cards/IngredientCardCheckbox';
import './pagesCss/Details.css';

function RecipeFoods() {
  const { detailFood } = useContext(ProductDetailsContext);
  const [ingredientesData, setingreditentesData] = useState([]);
  const [measure, setMeasures] = useState([]);
  const [ingredientsFinish, setIngredientsFinish] = useState([]);
  console.log(ingredientsFinish);
  useEffect(() => {
    const ingredientes = [];
    setingreditentesData(ingredientes);
    Object.entries(detailFood).forEach(([key, value]) => {
      if (key.includes('strIngredient') && value !== '' && value !== null) {
        ingredientes.push(value);
      }
    });
  }, [detailFood]);

  useEffect(() => {
    const quantidades = [];
    setMeasures(quantidades);
    Object.entries(detailFood).forEach(([key, value]) => {
      if (key.includes('strMeasure') && value !== '' && value !== null) {
        quantidades.push(value);
      }
    });
  }, [detailFood]);

  return (
    <section>
      {detailFood !== {} && (
        <div className="detailsPage">
          <div>
            <img
              className="image"
              data-testid="recipe-photo"
              src={ detailFood?.strMealThumb }
              alt={ detailFood?.strMeal }
            />
          </div>
          <div className="divTitleButtons">
            <h1
              className="titleName"
              data-testid="recipe-title"
            >
              {detailFood?.strMeal}
            </h1>
            <div className="divButtons">
              <ButtonShareFood />
              <ButtonFavoritarFood />
            </div>
          </div>
          <div>
            <p
              className="category"
              data-testid="recipe-category"
            >
              {detailFood?.strCategory}
            </p>
          </div>
          <div className="divIngredients">
            <h2>Ingredients</h2>
            <div className="divCardIngred">
              {ingredientesData.map((ingredients, index) => (
                <IngredientCardCheckbox
                  index={ index }
                  key={ index }
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
              {detailFood?.strInstructions}
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

export default RecipeFoods;
