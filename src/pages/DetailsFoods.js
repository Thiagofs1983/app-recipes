import React, { useContext } from 'react';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritar from '../components/DetalhesReceitas/ButtonFavoritar';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';

function DetailsFoods() {
  const { detailFood } = useContext(ProductDetailsContext);
  console.log(detailFood[0].idMeal);

  return (
    <section>
      <div>
        {/* <img
          data-testid="recipe-photo"
          src={ strMealThumb }
          alt="comida"
        /> */}
      </div>
      <div>
        <h1 data-testid="recipe-title">Sonho</h1>
        <div>
          <ButtonCompartilhar />
          <ButtonFavoritar />
        </div>
      </div>
      <div>
        <p data-testid="recipe-category">Categoria</p>
      </div>
      <div>
        <h2>Ingredients</h2>
        <h3>
          Virá um map do iten aqui
        </h3>
      </div>
      <div>
        <h2>Instructions</h2>
        <h3 data-testid="instructions">virá pelo provider</h3>
      </div>
      <div>
        <h2>Video</h2>
        <source
          data-testid="video"
        />
      </div>

    </section>
  );
}

export default DetailsFoods;
