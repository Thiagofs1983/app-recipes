import React from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
// import useLocalStorage from '../../hook/useLocalStorage';
// import ProductDetailsContext from '../../context/FoodDetails/ProductDetailsContext';
import './IngredientCardCheckbox.css';

function IngredientCardCheckbox(props) {
  const {
    index,
    ingredients,
    measure,
    testId,
    handleChange,
    setClickIngredients,

    // clickIngredient,
  } = props;

  const test = true;
  // const [check, setCheck] = useState(false);
  // const [progress, setProgress] = useLocalStorage('inProgressRecipes', {});
  // const { id } = useParams();

  const onClick1 = ({ target }) => {
    setClickIngredients(
      target.name,
    );
  };

  return (
    <label
      htmlFor={ index }
      data-testid={ testId }
      className={ test ? 'toogle' : '' }
    >
      <input
        type="checkbox"
        id={ index }
        name={ ingredients }
        // checked={ check }
        onChange={ handleChange }
        onClick={ onClick1 }
      />
      {`- ${ingredients} - ${measure[index]}`}
    </label>
  );
}

IngredientCardCheckbox.propTypes = {
  index: PropTypes.number.isRequired,
  ingredients: PropTypes.string.isRequired,
  measure: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  testId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  setClickIngredients: PropTypes.func.isRequired,
  // setArrayIngredient: PropTypes.func.isRequired,
  // clickIngredient: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default IngredientCardCheckbox;
