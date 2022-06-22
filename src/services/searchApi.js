const ingredientFood = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const nameFood = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const firstLetterFood = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const ingredientDrink = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const nameDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const firstLetterDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const fetchData = async (url, input) => {
  try {
    const response = await fetch(`${url}${input}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export default function fetchAPISearch(input, checkbox, category) {
  if (category === 'foods') {
    switch (checkbox) {
    case 'Ingredients':
      return fetchData(ingredientFood, input);
    case 'Name':
      return fetchData(nameFood, input);
    case 'First Letter':
      return fetchData(firstLetterFood, input);
    default:
      return fetchData();
    }
  } else {
    switch (checkbox) {
    case 'Ingredients':
      return fetchData(ingredientDrink, input);
    case 'Name':
      return fetchData(nameDrink, input);
    case 'First Letter':
      return fetchData(firstLetterDrink, input);
    default:
      return fetchData();
    }
  }
}
