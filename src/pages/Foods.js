import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';
import Header from '../components/Header';
import RecipeCard from '../components/Cards/RecipeCard';

function Foods() {
  const {
    dataFood,
    categoryFood,
    handleClickFilterCategoryFood,
    handleClickCategoryAllFood,
    listRecipes,
    btnFilter,
    category,
    setBtnFilter,
  } = useContext(FoodDrinkContext);

  const maxNumber = 12;

  useEffect(() => {
    setBtnFilter(false);
  }, []);
  const { detailApiFoodId } = useContext(ProductDetailsContext);

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

        {categoryFood.length > 0 && btnFilter === false
        && categoryFood
          .map((food) => (
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
        {dataFood.length > 0 && btnFilter === false
        && dataFood
          .map((food, index) => (
            <Link
              key={ food.strMeal }
              data-testid={ `${index}-recipe-card` }
              to={ `/foods/${food.idMeal}` }
              onClick={ () => detailApiFoodId(food.idMeal) }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ food.strMealThumb }
                alt={ food.strMeal }
              />
              <p data-testid={ `${index}-card-name` }>{ food.strMeal }</p>
            </Link>
          ))}
      </div>
      <div>
        { category === 'foods' && btnFilter === true
        && listRecipes.slice(0, maxNumber)
          .map((food, index) => (
            <Link key={ food.idMeal } to={ `/foods/${food.idMeal}` }>
              <RecipeCard
                image={ food.strMealThumb }
                name={ food.strMeal }
                index={ index }
              />
            </Link>
          )) }
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
