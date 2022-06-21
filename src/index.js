import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './context/UserProvider';
import FoodDrinkProvider from './context/FoodDrink/FoodDrinkProvider';
import ProductDetailsProvider from './context/FoodDetails/ProductDetailsProvider';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <FoodDrinkProvider>
        <ProductDetailsProvider>
          <App />
        </ProductDetailsProvider>
      </FoodDrinkProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
