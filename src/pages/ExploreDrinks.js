import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ButtonExplore from '../components/Explore/Button';

function ExploreDrinks() {
  const history = useHistory();

  const clickExploreDrinksIgredient = () => {
    history.push('/explore/drinks/ingredients');
  };

  const clickExploreDrinksSurprise = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(url);
    const { drinks } = await response.json();
    const id = drinks[0].idDrink;
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ cocktails: { [id]: [] } }));
    history.push(`/drinks/${id}`);
  };

  return (
    <div>
      <Header namePage="Explore Drinks" isEnable={ false } />
      <ButtonExplore
        testId="explore-by-ingredient"
        buttonText="By Ingredient"
        handleClick={ clickExploreDrinksIgredient }
      />
      <ButtonExplore
        testId="explore-surprise"
        buttonText="Surprise me!"
        handleClick={ clickExploreDrinksSurprise }
      />
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
