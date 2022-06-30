import React, { useContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ButtonShare from '../components/DetalhesReceitas/ButtonShare';
import ButtonFavoritarDrink from '../components/DetalhesReceitas/ButtonFavoritarDrink';
import ProductDetailsContext from '../context/FoodDetails/ProductDetailsContext';
import IngredientCardCheckbox from '../components/Cards/IngredientCardCheckbox';

function RecipeDrinks() {
  const { detailDrink, setIdUrl, done, setDone } = useContext(ProductDetailsContext);
  const [measure, setMeasures] = useState([]);
  const [getLocalStorage, setGetLocalStorage] = useState([]);
  const [ingredientesData, setingreditentesData] = useState([]);
  const [objLocalStorage, setObjLocalStorage] = useState(null);

  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    setIdUrl(id);
    const ingredientes = [];
    setingreditentesData(ingredientes);
    Object.entries(detailDrink).forEach(([key, value]) => {
      if (key.includes('strIngredient') && value !== '' && value !== null) {
        ingredientes.push(value);
      }
    });
  }, [detailDrink]);

  useEffect(() => {
    const quantidades = [];
    setMeasures(quantidades);
    Object.entries(detailDrink).forEach(([key, value]) => {
      if (key.includes('strMeasure') && value !== '' && value !== null) {
        quantidades.push(value);
      }
    });
  }, [detailDrink]);

  useEffect(() => {
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem(
        'inProgressRecipes', JSON.stringify({ cocktails: { [id]: [] } }),
      );
    } else {
      const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
      console.log(getLocal);
      const cocktails = { ...getLocal.cocktails,
        [id]: JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails[id] || [] };
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ ...getLocal, cocktails }));
    }
  }, []);

  useEffect(() => {
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { cocktails, meals } = getStorage;
    setObjLocalStorage({ ...objLocalStorage, cocktails, meals });
  }, []);

  useEffect(() => {
    const getArrLocalStorage = objLocalStorage?.cocktails[id];
    setGetLocalStorage(getArrLocalStorage);
  }, [objLocalStorage]);

  const handleChange = (ingredient) => {
    if (getLocalStorage?.includes(ingredient)) {
      const local = getLocalStorage?.filter((ingred) => ingred !== ingredient);
      const newItemLocal = {
        ...objLocalStorage,
        cocktails: {
          ...objLocalStorage?.cocktails,
          [id]: [...local],
        },
      };
      setGetLocalStorage([...local]);
      localStorage.setItem('inProgressRecipes', JSON.stringify(newItemLocal));
    } else {
      const newItemLocal = {
        ...objLocalStorage,
        cocktails: {
          ...objLocalStorage?.cocktails,
          [id]: [...getLocalStorage, ingredient],
        },
      };
      setGetLocalStorage([...getLocalStorage, ingredient]);
      localStorage.setItem('inProgressRecipes', JSON.stringify(newItemLocal));
    }
  };

  const clickRedirect = () => {
    const current = new Date();
    const date = `${current
      .getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const doneRecipeDrink = {
      id,
      type: 'drink',
      nationality: '',
      category: detailDrink?.strCategory,
      alcoholicOrNot: detailDrink?.strAlcoholic,
      name: detailDrink?.strDrink,
      image: detailDrink?.strDrinkThumb,
      doneDate: date,
      tags: [],
    };

    setDone([...done, doneRecipeDrink]);
    history.push('/done-recipes');
  };

  return (
    <section>
      {detailDrink !== {} && (
        <>
          <div>
            <img
              data-testid="recipe-photo"
              src={ detailDrink?.strDrinkThumb }
              alt={ detailDrink?.strDrink }
            />
          </div>
          <div>
            <h1 data-testid="recipe-title">{detailDrink?.strDrink}</h1>
            <div>
              <ButtonShare />
              <ButtonFavoritarDrink />
            </div>
          </div>
          <div>
            <p data-testid="recipe-category">{detailDrink?.strCategory}</p>
          </div>
          <div>
            <h2>Ingredients</h2>
            <h3>
              {ingredientesData.map((ingredients, index) => (
                <IngredientCardCheckbox
                  index={ index }
                  key={ index }
                  testId={ `${index}-ingredient-step` }
                  ingredients={ ingredients }
                  measure={ measure }
                  handleChange={ handleChange }
                  checked={
                    getLocalStorage?.some((ingredient) => ingredient === ingredients)
                  }
                />
              ))}
            </h3>
          </div>
          <div>
            <h2>Instructions</h2>
            <h4 data-testid="instructions">{detailDrink?.strInstructions}</h4>
          </div>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ getLocalStorage?.length !== ingredientesData?.length }
            onClick={ clickRedirect }
          >
            Finish Recipe
          </button>
        </>
      )}
    </section>
  );
}

export default RecipeDrinks;
