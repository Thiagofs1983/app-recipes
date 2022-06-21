import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import FoodDrinkContext from '../context/Food/FoodDrinkContext';
import Header from '../components/Header';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

function Foods() {
  const { dataFood, dataDrink } = useContext(FoodDrinkContext);
  console.log(dataFood);
  console.log(dataDrink);

  return (
    <div>
      Foods
      <Footer />
      <Header namePage="Foods"/>
    </div>
  );
}

export default Foods;
