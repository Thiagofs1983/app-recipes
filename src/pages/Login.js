import React, { useContext } from 'react';
import Input from '../components/Login/Input';
import Button from '../components/Login/Button';
import UserContext from '../context/UserContext';

function Login() {
  const { user, handleChange, handleClick } = useContext(UserContext);
  const validateEmail = /\S+@\S+\.\S+/;
  const MIN_LENGTH_PASSWORD = 7;
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
