import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/Cards/RecipeCard';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

function Drinks() {
  const {
    dataDrink,
    categoryDrink,
    handleClickFilterCategoryDrink,
    handleClickCategoryAllDrink,
    listRecipes,
    btnFilter,
    category,
    setBtnFilter,
  } = useContext(FoodDrinkContext);
  console.log(dataDrink);

  const maxNumber = 12;

  useEffect(() => {
    setBtnFilter(false);
  }, []);

  return (
    <div>
      <Header namePage="Drinks" />
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ handleClickCategoryAllDrink }
        >
          All
        </button>

        {categoryDrink.length > 0 && btnFilter === false
        && categoryDrink.map((drink) => (
          <button
            name={ drink.strCategory }
            key={ drink.strCategory }
            type="button"
            data-testid={ `${drink.strCategory}-category-filter` }
            onClick={ handleClickFilterCategoryDrink }
          >
            { drink.strCategory }
          </button>
        ))}
      </div>
      <div>
        {dataDrink.length > 0 && btnFilter === false
        && dataDrink.map((drink, index) => (
          <Link key={ drink.strDrink } to={ `/drinks/${drink.idDrink}` }>
            <div data-testid={ `${index}-recipe-card` }>

              <img
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
              />
              <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        { category === 'drinks' && btnFilter === true
        && listRecipes.slice(0, maxNumber)
          .map((drinks, index) => (
            <Link key={ drinks.idDrink } to={ `/drinks/${drinks.idDrink}` }>
              <RecipeCard
                image={ drinks.strDrinkThumb }
                name={ drinks.strDrink }
                index={ index }
              />
            </Link>
          )) }
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
