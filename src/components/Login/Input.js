import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name, value, onChange, testeId, text }) {
  return (
    <input
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
      data-testid={ testeId }
      className="inputLogin"
      placeholder={ text }
    />
  );
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testeId: PropTypes.string.isRequired,
};

export default Input;
