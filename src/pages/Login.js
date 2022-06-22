import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/Login/Input';
import Button from '../components/Login/Button';

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const validateEmail = /\S+@\S+\.\S+/;
  const MIN_LENGTH_PASSWORD = 7;

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    history.push('/foods');
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <main>
      <h1>Login</h1>
      <form action="">
        <Input
          type="email"
          name="email"
          value={ user.email }
          onChange={ handleChange }
          testeId="email-input"
        />
        <Input
          type="password"
          name="password"
          value={ user.password }
          onChange={ handleChange }
          testeId="password-input"
        />
        <Button
          testId="login-submit-btn"
          handleClick={ handleClick }
          buttonText="Enter"
          disabled={
            user.password.length < MIN_LENGTH_PASSWORD || !validateEmail.test(user.email)
          }
        />
      </form>
    </main>
  );
}

export default Login;
