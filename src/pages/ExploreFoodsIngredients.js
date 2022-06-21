import React, { useContext } from 'react';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';
import Footer from '../components/Footer/Footer';
import IgredientCard from '../components/Explore/IgredientCard';

function ExploreFoodsIngredients() {
  const { ingredients } = useContext(FoodDrinkContext);
  console.log(ingredients);
  return (
    <div>
      {
        ingredients.map((ingredient, index) => (
          <IgredientCard
            key={ ingredient.idIngredient }
            name={ ingredient.strIngredient }
            image={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
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

export default ExploreFoodsIngredients;
