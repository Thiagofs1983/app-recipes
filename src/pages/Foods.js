import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';

function Foods() {
  const { dataFood, dataDrink } = useContext(FoodDrinkContext);
  console.log(dataFood);
  console.log(dataDrink);

  return (
    <div>
     {/*  <div>
        {dataFood.map((food) => (
          <div >
            <img src={ food } alt={ food.name }/>
            <p>{}</p>
          </div>
        ))}
      </div> */}
      <Footer />
    </div>
  );
}

export default Foods;
