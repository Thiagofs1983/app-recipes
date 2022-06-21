import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './context/UserProvider';
import FoodDrinkProvider from './context/FoodDrink/FoodDrinkProvider';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <FoodDrinkProvider>
        <App />
      </FoodDrinkProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
