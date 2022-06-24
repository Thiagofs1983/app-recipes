import React from 'react';
import PropTypes, { any } from 'prop-types';
import ButtonShareDrink from '../DetalhesReceitas/ButtonShareDrink';
import ButtonShareFood from '../DetalhesReceitas/ButtonShareFood';

function RecipesDoneCard(props) {
  const { index, image, name, category, date, tags, buttonShareType } = props;

  return (
    <div className="card" data-testid={ `${index}-recipe-card` }>
      <img
        className="card-doneRecipes"
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        alt="img"
      />
      <p data-testid={ `${index}-horizontal-top-text` }>{ category }</p>
      <p className="card-name" data-testid={ `${index}-horizontal-name` }>{ name }</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{ date }</p>
      {
        buttonShareType
      }
      <div>
        {
          tags.map((nomeTags, indexTags) => (
            <p
              data-testid={ `${index}-${tagName}-horizontal-tag` }
              key={ indexTags }
            >
              {nomeTags}
            </p>
          ))
        }
      </div>
    </div>
  );
}

RecipesDoneCard.propTypes = {
  buttonShareType: PropTypes.any,
  tags: PropTypes.arrayOf(any),
  date: PropTypes.string,
  category: PropTypes.string,
  index: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default RecipesDoneCard;
