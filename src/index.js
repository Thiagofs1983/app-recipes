import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import FoodDrinkProvider from './context/FoodDrink/FoodDrinkProvider';
import ProductDetailsProvider from './context/FoodDetails/ProductDetailsProvider';

ReactDOM.render(
  <BrowserRouter>
    <FoodDrinkProvider>
      <ProductDetailsProvider>
        <App />
      </ProductDetailsProvider>
    </FoodDrinkProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
