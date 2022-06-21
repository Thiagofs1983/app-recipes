import React from 'react';
// import { useHistory } from 'react-router-dom';
import ButtonCompartilhar from '../components/DetalhesReceitas/ButtonCompartilhar';
import ButtonFavoritar from '../components/DetalhesReceitas/ButtonFavoritar';

function DetailsDrinks() {
  // const { valorQueViraDaApi } = useContext()
  // const history = useHistory();
  console.log();
  return (
    <section>
      <div>
        <img data-testid="recipe-photo" src="https://" alt="algumaImagen" />
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

export default DetailsDrinks;
