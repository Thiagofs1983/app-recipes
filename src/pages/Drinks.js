import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

function Drinks() {
  const {
    dataDrink,
    categoryDrink,
    handleClickFilterCategoryDrink,
    handleClickCategoryAllDrink,
  } = useContext(FoodDrinkContext);

  const { detailApiDrinkId } = useContext(ProductDetailsContext);

  return (
    <div>
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ handleClickCategoryAllDrink }
        >
          All
        </button>

        {categoryDrink.map((drink) => (
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
        {dataDrink.map((drink, index) => (
          <div
            key={ drink.strDrink }
            onClick={ () => detailApiDrinkId(drink.idDrink) }
            onKeyPress={ () => {} }
            role="menuitem"
            tabIndex={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
            />
            <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
