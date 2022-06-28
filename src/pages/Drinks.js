import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/Cards/RecipeCard';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';
import './pagesCss/Drinks.css';

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

  const { detailApiDrinkId } = useContext(ProductDetailsContext);

  const maxNumber = 12;

  useEffect(() => {
    setBtnFilter(false);
  }, []);

  return (
    <div>
      <Header namePage="Drinks" />
      <main className="mainDrinks">
        <div className="divButton">
          <button
            className="buttonDrinks"
            type="button"
            data-testid="All-category-filter"
            onClick={ handleClickCategoryAllDrink }
          >
            All
          </button>
          {categoryDrink.length > 0 && btnFilter === false
        && categoryDrink.map((drink) => (
          <button
            className="buttonDrinks"
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
        <div className="divCard">
          {dataDrink.length > 0 && btnFilter === false
        && dataDrink.map((drink, index) => (
          <div
            className="divDrink"
            key={ drink.strDrink }
            onClick={ () => detailApiDrinkId(drink.idDrink) }
            onKeyPress={ () => {} }
            role="menuitem"
            tabIndex={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              className="imgDrink"
              data-testid={ `${index}-card-img` }
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
            />
            <p
              className="nameDrink"
              data-testid={ `${index}-card-name` }
            >
              { drink.strDrink }
            </p>
          </div>
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
      </main>
      <Footer />
    </div>
  );
}

export default Drinks;
