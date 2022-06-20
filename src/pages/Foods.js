import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import FoodDrinkContext from '../context/Food/FoodDrinkContext';

function Foods() {
  const { dataFood, dataDrink } = useContext(FoodDrinkContext);
  console.log(dataFood);
  console.log(dataDrink);

  return (
    <div>
      Foods
      <Footer />
    </div>
  );
}

export default Foods;
