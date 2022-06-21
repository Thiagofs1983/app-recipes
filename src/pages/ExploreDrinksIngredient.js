import React, { useContext } from 'react';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';
import Footer from '../components/Footer/Footer';
import IgredientCard from '../components/Explore/IgredientCard';

function ExploreDrinksIngredient() {
  const { drinksIngredients } = useContext(FoodDrinkContext);
  console.log(drinksIngredients);
  return (
    <div>
      {
        drinksIngredients.map((ingredient, index) => (
          <IgredientCard
            key={ ingredient.strIngredient1 }
            name={ ingredient.strIngredient1 }
            image={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
            testId={ `${index}-ingredient-card` }
            testImage={ `${index}-card-img` }
            testName={ `${index}-card-name` }
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredient;
