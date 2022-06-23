import React, { useContext, useState, useEffect } from 'react';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritarFood from '../components/DetalhesReceitas/ButtonFavoritarFood';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import './Details.css';
// https://github.com/youtube/api-samples/issues/140 iframe youtube.

function DetailsFoods() {
  const { detailFood, RecomendadosDrink } = useContext(ProductDetailsContext);
  const [ingredientesData, setingreditentesData] = useState([]);
  const [measure, setMeasures] = useState([]);
  const [bool, setBool] = useState(true);

  const linkYoutube = detailFood?.strYoutube?.split('=')[1];

  const doneRecipeBtn = JSON.parse(localStorage.getItem('doneRecipe'));

  useEffect(() => {
    const test = [{ id: 2 }];
    Object.entries(test[0]).forEach(([key, value]) => {
      if (key.includes('id') && value === 2) {
        setBool(true);
      } else {
        setBool(false);
      }
    });
  }, []);

  console.log(bool);

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
            <p data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
              {`- ${ingredients} - ${measure[index]}`}
            </p>
          ))}
        </h3>
      </div>
      <div>
        <h2>Instructions</h2>
        <h4 data-testid="instructions">{detailFood?.strInstructions}</h4>
      </div>
      <div>
        <h2>Video</h2>
        <iframe
          data-testid="video"
          src={ `https://www.youtube.com/embed/${linkYoutube}` }
          title="Video"
        />
      </div>
      <h6>Recommended</h6>
      <div className="horizontal-scroll-wrapper">
        {RecomendadosDrink.map((card, index) => (
          <div
            className="divDrinks"
            data-testid={ `${index}-recomendation-card` }
            key={ card.idDrink }
          >
            <img
              data-testid="recipe-photo"
              src={ card.strDrinkThumb }
              alt={ card.strDrink }
            />
            <p data-testid="recipe-category">{card.strCategory}</p>
            <h3 data-testid={ `${index}-recomendation-title` }>{card.strDrink}</h3>
          </div>
        ))}
      </div>
      {!doneRecipeBtn ? undefined : (
        <div className="buttonStart">
          <button
            className="button1"
            type="button"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </button>
        </div>
      )}
    </section>
  );
}

export default DetailsFoods;
