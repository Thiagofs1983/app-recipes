import React, { useContext, useState, useEffect } from 'react';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritar from '../components/DetalhesReceitas/ButtonFavoritar';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import './Details.css';

function DetailsFoods() {
  const { detailFood, RecomendadosDrink } = useContext(ProductDetailsContext);
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
              src={ `https://www.youtube.com/embed${detailFood?.strinYoutube?.split('/')[1]}` }
              title="Video"
            />
          </div>
          <div className="horizontal-scroll-wrapper">
            <h6>Recommended</h6>
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
          <div className="buttonStart">
            <button
              className="button1"
              type="button"
              data-testid="start-recipe-btn"
            >
              Start Recipe
            </button>
          </div>

        </>
      )}
    </section>
  );
}

export default DetailsFoods;
