import React, { useContext, useState, useEffect } from 'react';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritar from '../components/DetalhesReceitas/ButtonFavoritar';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import './Details.css';

function RecipeFoods() {
  const { detailFood } = useContext(ProductDetailsContext);
  const [ingredientesData, setingreditentesData] = useState([]);
  const [measure, setMeasures] = useState([]);

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
        <>
          <div>
            <img
              data-testid="recipe-photo"
              src={ detailFood?.strMealThumb }
              alt={ detailFood?.strMeal }
            />
          </div>
          <div>
            <h1 data-testid="recipe-title">{detailFood?.strMeal}</h1>
            <div>
              <ButtonCompartilhar />
              <ButtonFavoritar />
            </div>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <p data-testid="recipe-category">{detailFood?.strCategory}</p>
          </div>
          <div>
            <h2>Ingredients</h2>
            <h3>
              {ingredientesData.map((ingredients, index) => (
                <label
                  htmlFor={ index }
                  key={ index }
                  data-testid={ `${index}-ingredient-step` }
                >
                  <input
                    type="checkbox"
                    id={ index }
                  />
                  {`- ${ingredients} - ${measure[index]}`}
                </label>
              ))}
            </h3>
          </div>
          <div>
            <h2>Instructions</h2>
            <h4 data-testid="instructions">{detailFood?.strInstructions}</h4>
          </div>
          <button
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finish
          </button>
        </>
      )}
    </section>
  );
}

export default RecipeFoods;
