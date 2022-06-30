import React, { useContext } from 'react';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';
import Footer from '../components/Footer/Footer';
import IngredientCard from '../components/Explore/IngredientCard';
import Header from '../components/Header/Header';
import './pagesCss/Explore.css';

function ExploreFoodsIngredients() {
  const { ingredients, clickMealsIngredient } = useContext(FoodDrinkContext);
  return (
    <div>
      <Header namePage="Explore Ingredients" isEnable={ false } />
      <main className="ingredientsDiv">
        {
          ingredients.map((ingredient, index) => (
            <IngredientCard
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
      </main>
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
