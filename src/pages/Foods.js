import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import FoodDrinkContext from '../context/Food/FoodDrinkContext';
import Header from '../components/Header';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

function Foods() {
  const {
    dataFood,
    categoryFood,
    handleClickFilterCategoryFood,
    handleClickCategoryAllFood,
  } = useContext(FoodDrinkContext);

  return (
    <div>
      <Header namePage="Foods" />
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
          <Link key={ food.strMeal } to={ `/foods/${food.idMeal}` }>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ food.strMealThumb }
                alt={ food.strMeal }
              />
              <p data-testid={ `${index}-card-name` }>{ food.strMeal }</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
