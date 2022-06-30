import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ButtonExplore from '../components/Explore/Button';
import './pagesCss/Explore.css';

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
    localStorage.setItem('inProgressRecipes', JSON
      .stringify({ meals: { [id]: [] } }));
    history.push(`/foods/${id}`);
  };

  return (
    <div>
      <Header namePage="Explore Foods" isEnable={ false } />
      <main className="mainBy">
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
      </main>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
