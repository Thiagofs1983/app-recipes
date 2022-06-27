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
    <section className="detailsPage">
      <div>
        <img
          className="image"
          data-testid="recipe-photo"
          src={ detailFood?.strMealThumb }
          alt={ detailFood?.strMeal }
        />
      </div>
      <div className="divTitleButtons">
        <h1 className="titleName" data-testid="recipe-title">{detailFood?.strMeal}</h1>
        <div className="divButtons">
          <ButtonShareFood />
          <ButtonFavoritarFood />
        </div>
      </div>
      <div>
        <h5
          className="category"
          data-testid="recipe-category"
        >
          {detailFood?.strCategory}
        </h5>
      </div>
      <div className="divIngredients">
        <h2>Ingredients</h2>
        <div>
          {ingredientesData.map((ingredients, index) => (
            <p
              className="ingredients"
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ index }
            >
              {`- ${ingredients} - ${measure[index]}`}
            </p>
          ))}
        </div>
      </div>
      <div className="divInstructions">
        <h2>Instructions</h2>
        <p
          className="instructions"
          data-testid="instructions"
        >
          {detailFood?.strInstructions}
        </p>
      </div>
      <div className="divVideo">
        <h2>Video</h2>
        <iframe
          data-testid="video"
          src={ `https://www.youtube.com/embed/${linkYoutube}` }
          title="Video"
        />
      </div>
      <div className="horizontal-scroll-wrapper-food">
        <h2>Recommended</h2>
        {RecomendadosDrink.map((card, index) => (
          <div
            className="divDrinksRecom"
            data-testid={ `${index}-recomendation-card` }
            key={ card.idDrink }
          >
            <img
              className="imgRecommended"
              data-testid="recipe-photo"
              src={ card.strDrinkThumb }
              alt={ card.strDrink }
            />
            <p
              className="categRecommended"
              data-testid="recipe-category"
            >
              {card.strCategory}
            </p>
            <p
              className="nameRecommended"
              data-testid={ `${index}-recomendation-title` }
            >
              {card.strDrink}
            </p>
          </div>
        ))}
      </div>
      <div className="buttonStart">
        {
          done.length === 0 ? (
            <button
              className="buttonRecipe"
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
