import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Criar a tela de Login com suas funcionalidades', () => {
  it('A página Login renderizada na rota "/"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const loginEl = screen.getByText('Login');
    expect(loginEl).toBeTheDocument();
  });
});
