import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

function Drinks() {
  const {
    dataDrink,
    categoryDrink,
    handleClickFilterCategoryDrink,
  } = useContext(FoodDrinkContext);
  console.log(dataDrink);

  return (
    <div>
      <div>
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
        {dataDrink.map((food, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ food.strDrink }>
            <img
              data-testid={ `${index}-card-img` }
              src={ food.strDrinkThumb }
              alt={ food.strDrink }
            />
            <p data-testid={ `${index}-card-name` }>{ food.strDrink }</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
