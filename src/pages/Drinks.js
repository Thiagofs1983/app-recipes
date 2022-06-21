import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

const NUMBER_DOZE = 12;

function Drinks() {
  const { dataDrink } = useContext(FoodDrinkContext);
  const filterDrinks12 = dataDrink.filter((food, index) => index < NUMBER_DOZE);
  console.log(filterDrinks12);

  return (
    <div>
      <div>
        {filterDrinks12.map((food, index) => (
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
