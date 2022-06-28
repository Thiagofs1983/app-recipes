import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButtonShare from '../components/DetalhesReceitas/ButtonShare';
import ButtonFavoritarFood from '../components/DetalhesReceitas/ButtonFavoritarFood';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import IngredientCardCheckbox from '../components/Cards/IngredientCardCheckbox';
import useLocalStorage from '../hook/useLocalStorage';

function RecipeFoods() {
  const { detailFood } = useContext(ProductDetailsContext);
  const [ingredientesData, setingreditentesData] = useState([]);
  const [measure, setMeasures] = useState([]);
  const [clickIngredient, setClickIngredients] = useState([]);
  const [storage, setStorage] = useLocalStorage('inProgressRecipes', {});
  const { id } = useParams();
  console.log(clickIngredient);
  // console.log(ingredientsFinish);
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

  const handleChange = () => {
    setClickIngredients([
      ...clickIngredient,
      clickIngredient,
    ]);

    setStorage({
      ...storage,
      meals: {
        ...storage.meals,
        [id]: [...clickIngredient],
      },
    });
  };

  console.log(clickIngredient);

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
              <ButtonShare />
              <ButtonFavoritarFood />
            </div>
          </div>
          <div>
            <p data-testid="recipe-category">{detailFood?.strCategory}</p>
          </div>
          <div>
            <h2>Ingredients</h2>
            <h3>
              {ingredientesData.map((ingredients, index) => (
                <IngredientCardCheckbox
                  index={ index }
                  key={ index }
                  testId={ `${index}-ingredient-step` }
                  ingredients={ ingredients }
                  measure={ measure }
                  handleChange={ handleChange }
                  setClickIngredients={ setClickIngredients }
                  clickIngredient={ clickIngredient }
                />
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
