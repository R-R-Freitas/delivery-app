import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MIN_LENGTH_PASSWORD } from '../../services/constants';
import signIn from '../../services/fechApi';
import { saveLocalStorage } from '../../services/functions';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const emailRegex = /\S+@\S+\.+/;

  const btnIsValid = emailRegex.test(email) && password.length >= MIN_LENGTH_PASSWORD;

  const routeChange = () => {
    navigate('/register');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signIn(email, password);

    if (user) {
      saveLocalStorage(user);

      setError(false);

      if (user.role === 'administrator') return navigate('/admin/manage');
      if (user.role === 'seller') return navigate('/seller/orders');

      navigate('/customer/products');
    } else {
      setError(true);
    }
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
          onClick={ handleSubmit }
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
        {error && (
          <p data-testid="common_login__element-invalid-email">
            Dados não cadastrados.
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
