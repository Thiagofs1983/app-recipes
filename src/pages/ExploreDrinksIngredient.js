import React, { useContext } from 'react';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IgredientCard from '../components/Explore/IgredientCard';

function ExploreDrinksIngredient() {
  const { drinksIngredients, clickDrinkIngredient } = useContext(FoodDrinkContext);
  return (
    <div>
      <Header namePage="Explore Ingredients" isEnable={ false } />
      {
        drinksIngredients.map((ingredient, index) => (
          <IgredientCard
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
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredient;
