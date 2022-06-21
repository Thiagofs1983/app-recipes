import React from 'react';
import Footer from '../components/Footer/Footer';
import ButtonExplore from '../components/Explore/Button';

function ExploreDrinks() {
  return (
    <div>
      <ButtonExplore
        testId="explore-by-ingredient"
        buttonText="By Ingredient"
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
