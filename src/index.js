import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FoodDrinkProvider from './context/FoodDrink/FoodDrinkProvider';

ReactDOM.render(
  <FoodDrinkProvider>
    <App />
  </FoodDrinkProvider>,
  document.getElementById('root'),
);
