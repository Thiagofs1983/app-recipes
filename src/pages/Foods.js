import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';
import Header from '../components/Header/Header';
import RecipeCard from '../components/Cards/RecipeCard';
import './pagesCss/Foods.css';

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

  const { detailApiFoodId } = useContext(ProductDetailsContext);

  const maxNumber = 12;

  useEffect(() => {
    setBtnFilter(false);
  }, []);

  return (
    <div>
      <Header namePage="Foods" />
      <main className="mainFoods">
        <div className="divButton">
          <button
            className="buttonFoods"
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
              className="buttonFoods"
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
        <div className="divCard">
          {dataFood.length > 0 && btnFilter === false
        && dataFood
          .map((food, index) => (
            <div
              className="divFood"
              key={ food.strMeal }
              onClick={ () => detailApiFoodId(food.idMeal) }
              onKeyPress={ () => {} }
              role="menuitem"
              tabIndex={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                className="imgFood"
                data-testid={ `${index}-card-img` }
                src={ food.strMealThumb }
                alt={ food.strMeal }
              />
              <p
                className="nameFood"
                data-testid={ `${index}-card-name` }
              >
                { food.strMeal }
              </p>
            </div>
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
      </main>
      <Footer />
    </div>
  );
}

export default Foods;
