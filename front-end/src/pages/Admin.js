import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MIN_LENGTH_NAME, MIN_LENGTH_PASSWORD } from '../services/constants';
import { api } from '../services/fechApi';
import setToken, { getLocalStorage, saveLocalStorage } from '../services/functions';

function Admin() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [isDisabled, setIsDisabled] = useState(true);
  const [registerFailed, setRegisterFailed] = useState(false);

  const handleSubmit = async () => {
    try {
      console.log({ name, email, password, role });
      const { data } = await api.post('/admin', { name, email, password, role });

      saveLocalStorage(data);

      // setName('');
      // setEmail('');
      // setPassword('');

      // if (data.role === 'seller') return navigate('/seller/orders');

      // navigate('/customer/products');
    } catch (error) {
      console.log(error);

      setRegisterFailed(true);
    }
  };

  useEffect(() => {
    const { token } = getLocalStorage();

    if (!token) return navigate('/');

    setToken(token);
  }, [navigate]);

  useEffect(() => {
    const validName = name.length >= MIN_LENGTH_NAME;
    const emailFormat = /\S+@\S+\.+/;
    const validEmail = emailFormat.test(email);
    const validPassword = password.length >= MIN_LENGTH_PASSWORD;
    const validRole = role !== undefined;

    if (validName && validEmail && validPassword && validRole) {
      return setIsDisabled(false);
    }

    return setIsDisabled(true);
  }, [email, name, password, role]);

  return (
    <div>
      <Navbar item2="GERENCIAR USUÁRIOS" />
      <form>
        <h1>Cadastrar novo usuário</h1>
        <label htmlFor="name-input">
          Nome
          <input
            id="name"
            data-testid="admin_manage__input-name"
            type="text"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
            placeholder="Seu nome"
          />
        </label>

        <label htmlFor="email-input">
          Email
          <input
            data-testid="admin_manage__input-email"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            placeholder="seu-email@site.com.br"
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            data-testid="admin_manage__input-password"
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            placeholder="Senha"
          />
        </label>

        <label htmlFor="role-input">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ ({ target: { value } }) => setRole(value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>

        <button
          data-testid="admin_manage__button-register"
          type="button"
          onClick={ handleSubmit }
          disabled={ isDisabled }
        >
          CADASTRAR
        </button>
      </form>
      { registerFailed ? (
        <p data-testid="admin_manage__element-invalid-register">
          Dados já cadastrados.
        </p>
      )
        : null }

    </div>
  );
}

export default Admin;
