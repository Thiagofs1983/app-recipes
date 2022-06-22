import React, { useContext } from 'react';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';
import Footer from '../components/Footer/Footer';
import IgredientCard from '../components/Explore/IgredientCard';
import Header from '../components/Header';

function ExploreFoodsIngredients() {
  const { ingredients, clickMealsIngredient } = useContext(FoodDrinkContext);
  return (
    <div>
      <Header namePage="Explore Ingredients" isEnable={ false } />
      {
        ingredients.map((ingredient, index) => (
          <IgredientCard
            key={ ingredient.idIngredient }
            name={ ingredient.strIngredient }
            image={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
            testId={ `${index}-ingredient-card` }
            testImage={ `${index}-card-img` }
            testName={ `${index}-card-name` }
            handleClick={ () => clickMealsIngredient(ingredient.strIngredient) }
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
