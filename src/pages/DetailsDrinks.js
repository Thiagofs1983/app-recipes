import React, { useContext } from 'react';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritar from '../components/DetalhesReceitas/ButtonFavoritar';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import './Details.css';

function DetailsDrinks() {
  const { detailDrink, recommendedFood } = useContext(ProductDetailsContext);
  console.log(detailDrink);

  return (
    <section>
      <div>
        <img
          data-testid="recipe-photo"
          src={ detailDrink?.strDrinkThumb }
          alt={ detailDrink?.strGlass }
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
        <h6 data-testid="recipe-category">{detailDrink?.strAlcoholic}</h6>
      </div>
      <div>
        <h2
          data-testid={ `${detailDrink?.length}-ingredient-name-and-measure` }
        >
          Ingredients
        </h2>
        {/* {
          detailDrink.map((drinks) => )
        } */}
      </div>
      <div>
        <h2>Instructions</h2>
        <h3 data-testid="instructions">{detailDrink?.strInstructions}</h3>
      </div>
      <div className="scrollmenu">
        <h6>Receitas Recomendadas</h6>
        {
          recommendedFood.map((drinks, index) => (
            <div
              data-testid={ `${drinks.length}-recomendation-card` }
              className="divDrinks"
              key={ index }
            >
              <img src={ drinks.strDrinkThumb } alt={ drinks.strGlass } />
              <p>{drinks.strAlcoholic}</p>
              <h5
                data-testid={ `${drinks.length}-recomendation-title` }
              >
                {drinks.strDrink}
              </h5>
            </div>))
        }
      </div>
      <button
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </button>
    </section>
  );
}

export default DetailsDrinks;
