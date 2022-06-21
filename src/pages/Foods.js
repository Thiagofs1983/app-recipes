import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

const NUMBER_DOZE = 12;

function Foods() {
  const { dataFood } = useContext(FoodDrinkContext);
  const filterFoods12 = dataFood.filter((food, index) => index < NUMBER_DOZE);
  console.log(filterFoods12);

  return (
    <div>
      <div>
        {filterFoods12.map((food, index) => (
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
