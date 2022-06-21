import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ButtonExplore from '../components/Explore/Button';

function ExploreFoods() {
  const history = useHistory();

  const clickExploreFoodsIgredient = () => {
    history.push('/explore/foods/ingredients');
  };

  const clickExploreFoodsNationality = () => {
    history.push('/explore/foods/nationalities');
  };

  const clickExploreFoodsSurprise = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(url);
    const { meals } = await response.json();
    const id = meals[0].idMeal;
    history.push(`/foods/${id}`);
  };

  return (
    <div>
      <ButtonExplore
        testId="explore-by-ingredient"
        buttonText="By Ingredient"
        handleClick={ clickExploreFoodsIgredient }
      />
      <ButtonExplore
        testId="explore-by-nationality"
        buttonText="By Nationality"
        handleClick={ clickExploreFoodsNationality }
      />
      <ButtonExplore
        testId="explore-surprise"
        buttonText="Surprise me!"
        handleClick={ clickExploreFoodsSurprise }
      />
      <Footer />
    </div>
  );
}

export default ExploreFoods;
