import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const REDIRECIONAMENTO = '/explore/drinks';

describe('Testa a Toda há tela do exploreDrinks', () => {
  test(`Ao clicar no botão exploreDrinks 
  e redirecionado para /explore/drinks/ingredients`, () => {
    const { history } = renderWithRouter(<App />);
    history.push(REDIRECIONAMENTO);

    const btnExploreByIngredient = screen.getByRole('button', { name: /By Ingredient/i });
    expect(btnExploreByIngredient).toBeInTheDocument();

    userEvent.click(btnExploreByIngredient);

    expect(history.location.pathname).toBe('/explore/drinks/ingredients');
  });

  test('Ao clicar no botão explore drinks e redirecionado para /explore/drinks', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(invalidTokenQuestionsResponse),
    });

    const { history } = renderWithRouter(<App />);
    history.push(REDIRECIONAMENTO);

    const btnExploreSurpriseMe = screen.getByRole('button', { name: 'Surprise me!' });
    expect(btnExploreSurpriseMe).toBeInTheDocument();

    const redirecionamento = history.location.pathname.split('/1');

    userEvent.click(btnExploreSurpriseMe);

    expect(history.location.pathname).toBe('/explore/drinks');
  });
});