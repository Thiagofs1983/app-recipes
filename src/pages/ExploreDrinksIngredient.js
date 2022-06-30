import React, { useContext } from 'react';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IngredientCard from '../components/Explore/IngredientCard';
import './pagesCss/Explore.css';

function ExploreDrinksIngredient() {
  const { drinksIngredients, clickDrinkIngredient } = useContext(FoodDrinkContext);
  return (
    <div>
      <Header namePage="Explore Ingredients" isEnable={ false } />
      <main className="ingredientsDiv">
        {
          drinksIngredients.map((ingredient, index) => (
            <IngredientCard
              key={ ingredient.strIngredient1 }
              name={ ingredient.strIngredient1 }
              image={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              testId={ `${index}-ingredient-card` }
              testImage={ `${index}-card-img` }
              testName={ `${index}-card-name` }
              handleClick={ () => clickDrinkIngredient(ingredient.strIngredient1) }
            />
          ))
        }
      </main>
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredient;
