import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import FoodDrinkContext from '../context/FoodDrink/FoodDrinkContext';


function Drinks() {
  const {
    dataDrink,
    categoryDrink,
    handleClickFilterCategoryDrink,
    handleClickCategoryAllDrink,
  } = useContext(FoodDrinkContext);
  console.log(dataDrink);

  return (
    <div>
      <Header namePage="Drinks" />
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ handleClickCategoryAllDrink }
        >
          All
        </button>

        {categoryDrink.map((drink) => (
          <button
            name={ drink.strCategory }
            key={ drink.strCategory }
            type="button"
            data-testid={ `${drink.strCategory}-category-filter` }
            onClick={ handleClickFilterCategoryDrink }
          >
            { drink.strCategory }
          </button>
        ))}
      </div>
      <div>
        {dataDrink.map((drink, index) => (
          <Link key={ drink.strDrink } to={ `/drinks/${drink.idDrink}` }>
            <div data-testid={ `${index}-recipe-card` }>

              <img
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
              />
              <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
