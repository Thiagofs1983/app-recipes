import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import ProductDetailsContext from '../../context/FoodDetails/ProductDetailsContext';
import './IngredientCardCheckbox.css';

function IngredientCardCheckbox({
  index, ingredients, measure, testId, arrIngredients }) {
  const [check, setCheck] = useState(false);

  /* const { detailDrink } = useContext(ProductDetailsContext); */
  const handleChange = ({ target: { checked } }) => {
    setCheck(checked);
    arrIngredients((prev) => [...prev, ingredients]);
    /* if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      localStorage.setItem(inProgressRecipes, JSON.stringify())
    } */
  };

  return (
    <label
      htmlFor={ index }
      data-testid={ testId }
      className={ check === true ? 'toogle' : '' }
    >
      <input
        type="checkbox"
        id={ index }
        checked={ check }
        onChange={ handleChange }
      />
      {`- ${ingredients} - ${measure[index]}`}
    </label>
  );
}

IngredientCardCheckbox.propTypes = {
  index: PropTypes.number.isRequired,
  ingredients: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  arrIngredients: PropTypes.func.isRequired,
};

export default IngredientCardCheckbox;
