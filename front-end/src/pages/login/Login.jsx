import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MIN_LENGTH_PASSWORD } from '../../services/constants';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errorMessage = false;
  const emailRegex = /\S+@\S+\.+/;

  const btnIsValid = emailRegex.test(email) && password.length >= MIN_LENGTH_PASSWORD;

  const routeChange = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            data-testid="common_login__input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Password
          <input
            type="password"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !btnIsValid }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => routeChange() }
        >
          Ainda não tenho conta
        </button>
        {errorMessage && (
          <p data-testid="common_login__element-invalid-email">
            Mensagem de erro
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
