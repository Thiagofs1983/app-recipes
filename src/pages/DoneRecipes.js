import React from 'react';
import Header from '../components/Header/Header';

function DoneRecipes() {
  // const [doneRecipes, setDoneRecipes] = useState([]);

  const handleAll = () => {
    console.log('all');
  };

  const handleFood = () => {
    console.log('food');
  };

  const handleDrinks = () => {
    console.log('drink');
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
        {/* <div>
          <p data-testid="${index}-horizontal-top-text">Category Recipe</p>
          <img data-testid="${index}-horizontal-image" src="imgCard" alt="imgCard" />
          <p data-testid="${index}-horizontal-name">Name Recipe</p>
          <p data-testid="${index}-horizontal-done-date">Date Recipe</p>
          <img
            data-testid="${index}-horizontal-share-btn"
            src="shareRecipes"
            alt="shareRecipes"
          />
          <p data-testid="${index}-${tagName}-horizontal-tag">Tags</p>
        </div> */}
      </div>
    </div>
  );
}

export default DoneRecipes;
