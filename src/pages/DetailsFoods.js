import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ButtonShareFood from '../components/DetalhesReceitas/ButtonShareFood';
import ButtonFavoritarFood from '../components/DetalhesReceitas/ButtonFavoritarFood';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import './pagesCss/Details.css';
// https://github.com/youtube/api-samples/issues/140 iframe youtube.

function DetailsFoods() {
  const { detailFood, RecomendadosDrink,
    progress, setProgress, setDone, done,
    nameButton, setNameButton,
  } = useContext(ProductDetailsContext);
  const [ingredientesData, setingreditentesData] = useState([]);
  const [measure, setMeasures] = useState([]);
  const linkYoutube = detailFood?.strYoutube?.split('=')[1];

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const ingredientes = [];
    setingreditentesData(ingredientes);
    Object.entries(detailFood).forEach(([key, value]) => {
      if (key.includes('strIngredient') && value !== '' && value !== null) {
        ingredientes.push(value);
      }
    });
  }, [detailFood]);
  console.log(detailFood);

  useEffect(() => {
    const quantidades = [];
    setMeasures(quantidades);
    Object.entries(detailFood).forEach(([key, value]) => {
      if (key.includes('strMeasure') && value !== '' && value !== null) {
        quantidades.push(value);
      }
    });
  }, [detailFood]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('inProgressRecipes'))?.meals[id]) {
      setNameButton(false);
    }
  }, []);

  const handleStartClick = () => {
    setProgress({
      ...progress,
      meals: {
        ...progress.meals,
        [detailFood?.idMeal]: [],
      },
    });
    setDone([]);
    history.push(`/foods/${detailFood?.idMeal}/in-progress`);
  };

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
          <ButtonShareFood />
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

export default DetailsFoods;
