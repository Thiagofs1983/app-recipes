import React, { useContext } from 'react';
import RecipesDoneCard from '../components/Cards/RecipesDoneCard';
import ButtonShareDrink from '../components/DetalhesReceitas/ButtonShareDrink';
import ButtonShareFood from '../components/DetalhesReceitas/ButtonShareFood';
import Header from '../components/Header/Header';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';

function DoneRecipes() {
  const { detailFood,
    detailDrink,
    done,
    // setDone,
  } = useContext(ProductDetailsContext);
  const [doneRecipes, setDoneRecipes] = useState([]);
  console.log('comida', detailFood);
  console.log('bebida', detailDrink);

  const handleAll = () => {
    console.log('all');
    setDoneRecipes([
      ...doneRecipes,
      done,
    ]);
  };

  const handleFood = () => {
    console.log('food');
    setDoneRecipes([
      ...doneRecipes,
      done.type === 'food',
    ]);
  };

  const handleDrinks = () => {
    console.log('drink');
    setDoneRecipes([
      ...doneRecipes,
      done.type === 'drink',
    ]);
  };

  return (
    <div>
      <Header namePage="Done Recipes" isEnable={ false } />
      Done Recipes
      <div>
        <button
          onClick={ handleAll }
          data-testid="filter-by-all-btn"
          type="button"
        >
          All
        </button>
        <button
          onClick={ handleFood }
          data-testid="filter-by-food-btn"
          type="button"
        >
          Food
        </button>
        <button
          onClick={ handleDrinks }
          data-testid="filter-by-drink-btn"
          type="button"
        >
          Drinks
        </button>
        <div>
          {
            doneRecipes.map((doneItem, index) => (
              <RecipesDoneCard
                key={ index }
                buttonShareType={ doneItem.type === 'food'
                  ? <ButtonShareFood data-testid={ `${index}-horizontal-share-btn` } />
                  : <ButtonShareDrink data-testid={ `${index}-horizontal-share-btn` } /> }
                tags={ doneItem.tags }
                date={ doneItem.doneDate }
                category={ doneItem.type === 'food'
                  ? doneItem.category : doneItem.alcoholicOrNot }
                index={ index }
                image={ doneItem.image }
                name={ doneItem.name }
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default DoneRecipes;
