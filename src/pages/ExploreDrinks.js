import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ButtonExplore from '../components/Explore/Button';

function ExploreDrinks() {
  const history = useHistory();

  const clickExploreDrinksIgredient = () => {
    history.push('/explore/drinks/ingredients');
  };

  return (
    <div>
      <ButtonExplore
        testId="explore-by-ingredient"
        buttonText="By Ingredient"
        handleClick={ clickExploreDrinksIgredient }
      />
      <ButtonExplore
        testId="explore-surprise"
        buttonText="Surprise me!"
      />
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
