import React, { useContext } from 'react';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritar from '../components/DetalhesReceitas/ButtonFavoritar';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import './Details.css';

function DetailsFoods() {
  const { detailFood, RecomendadosDrink } = useContext(ProductDetailsContext);
  console.log(detailFood);
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
          <ButtonFavoritar />
        </div>
      </div>
      <div>
        <p data-testid="recipe-category">{detailFood?.strCategory}</p>
      </div>
      <div>
        <h2 data-testid={ `${0}-ingredient-name-and-measure` }>Ingredients</h2>
        <h3>
          olś
        </h3>
      </div>
      <div>
        <h2>Instructions</h2>
        <h4 data-testid="instructions">{detailFood?.strInstructions}</h4>
      </div>
      <div>
        <h2>Video</h2>
        <iframe data-testid="video" src={ detailFood?.strYoutube } title="Video" />
      </div>
      <div className="scrollmenu">
        <h6>Recommended</h6>
        {
          RecomendadosDrink.map((card, index) => (
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
          ))
        }
      </div>
      <div className="buttonStart">
        <button
          type="button"
          data-testid="start-recipe-btn"
        >
          Start Recipe
        </button>
      </div>

    </section>
  );
}

export default DetailsFoods;
