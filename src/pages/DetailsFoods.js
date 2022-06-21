import React, { useContext } from 'react';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritar from '../components/DetalhesReceitas/ButtonFavoritar';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';

function DetailsFoods() {
  const { detailFood, RecomendadosDrink } = useContext(ProductDetailsContext);
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
        <h2 data-testid="0-ingredient-name-and-measure ">Ingredients</h2>
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
      <div>
        <h2>Recommended</h2>
        {
          RecomendadosDrink.map((card) => (
            <div key={ card.idDrink }>
              <img src={ card.strDrinkThumb } alt={ card.strDrink } />
              <p>{card.strCategory}</p>
              <h3>{card.strDrink}</h3>
            </div>
          ))
        }
      </div>
      <div>
        <button
          type="button"
        >
          Start Recipe
        </button>
      </div>

    </section>
  );
}

export default DetailsFoods;
