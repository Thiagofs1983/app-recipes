import React from 'react';
import Footer from '../components/Footer/Footer';
import ButtonExplore from '../components/Explore/Button';

function ExploreFoods() {
  return (
    <div>
      <ButtonExplore
        testId="explore-by-ingredient"
        buttonText="By Ingredient"
      />
      <ButtonExplore
        testId="explore-by-nationality"
        buttonText="By Nationality"
      />
      <ButtonExplore
        testId="explore-surprise"
        buttonText="Surprise me!"
      />
      <Footer />
    </div>
  );
}

export default ExploreFoods;
