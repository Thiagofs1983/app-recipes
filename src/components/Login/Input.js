import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name, value, onChange, testeId }) {
  return (
    <input
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
      data-testid={ testeId }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testeId: PropTypes.string.isRequired,
};

export default Input;
