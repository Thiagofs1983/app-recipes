import React from 'react';
import Footer from '../components/Footer/Footer';
import ButtonExplore from '../components/Explore/Button';

function Explore() {
  return (
    <div>
      <ButtonExplore
        buttonText="Explore Foods"
        testId="explore-foods"
      />
      <ButtonExplore
        buttonText="Explore Drinks"
        testId="explore-drinks"
      />
      <Footer />
    </div>
  );
}

export default Explore;
