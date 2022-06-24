import React, { useContext, useState, useEffect } from 'react';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritar from '../components/DetalhesReceitas/ButtonFavoritar';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import IngredientCardCheckbox from '../components/Cards/IngredientCardCheckbox';
import './Details.css';

function RecipeDrinks() {
  const { detailDrink } = useContext(ProductDetailsContext);
  const [ingredientesData, setingreditentesData] = useState([]);
  const [measure, setMeasures] = useState([]);
  console.log(detailDrink);

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
        <>
          <div>
            <img
              data-testid="recipe-photo"
              src={ detailDrink?.strDrinkThumb }
              alt={ detailDrink?.strDrink }
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
            <p data-testid="recipe-category">{detailDrink?.strCategory}</p>
          </div>
          <div>
            <h2>Ingredients</h2>
            <h3>
              {ingredientesData.map((ingredients, index) => (
                <IngredientCardCheckbox
                  key={ index }
                  index={ index }
                  ingredients={ ingredients }
                  measure={ measure }
                />
              ))}
            </h3>
          </div>
          <div>
            <h2>Instructions</h2>
            <h4 data-testid="instructions">{detailDrink?.strInstructions}</h4>
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

export default RecipeDrinks;
