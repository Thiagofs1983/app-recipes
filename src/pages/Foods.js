import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

function Foods() {
  const {
    dataFood,
    categoryFood,
    handleClickFilterCategoryFood,
  } = useContext(FoodDrinkContext);
  console.log(dataFood);
  console.log(categoryFood);

  return (
    <div>
      <div>
        {categoryFood.map((food) => (
          <button
            name={ food.strCategory }
            key={ food.strCategory }
            type="button"
            data-testid={ `${food.strCategory}-category-filter` }
            onClick={ handleClickFilterCategoryFood }
          >
            { food.strCategory }
          </button>
        ))}
      </div>
      <div>
        {dataFood.map((food, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ food.strMeal }>
            <img
              data-testid={ `${index}-card-img` }
              src={ food.strMealThumb }
              alt={ food.strMeal }
            />
            <p data-testid={ `${index}-card-name` }>{ food.strMeal }</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
