import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

function Foods() {
  const {
    dataFood,
    categoryFood,
    handleClickFilterCategoryFood,
    handleClickCategoryAllFood,
  } = useContext(FoodDrinkContext);
  console.log(dataFood);

  const { detailApiFoodId } = useContext(ProductDetailsContext);

  return (
    <div>
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ handleClickCategoryAllFood }
        >
          All
        </button>

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
          <div
            key={ food.strMeal }
            onClick={ () => detailApiFoodId(food.idMeal) }
            onKeyPress={ () => {} }
            role="menuitem"
            tabIndex="0"
            data-testid={ `${index}-recipe-card` }
          >
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
