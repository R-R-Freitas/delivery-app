import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [registrationFailure, setRegistrationFailure] = useState(false);

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            data-testid="common_register__input-name"
            type="text"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
            placeholder="Seu nome"
          />
        </label>

        <label htmlFor="email-input">
          Email
          <input
            data-testid="common_register__input-email"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            placeholder="seu-email@site.com.br"
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            data-testid="common_register__input-password"
            type="text"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            placeholder="Senha"
          />
        </label>

        <button
          data-testid="common_register__button-register"
          type="submit"
          onClick={ () => console.log('enviou os dados para o backend') }
        >
          CADASTRAR
        </button>
      </form>
      {/* { registrationFailure ? (
        <p data-testid="common_register__element-invalid_register ">
          Dados inválidos. Por favor, tente novamente.
        </p>
      )
        : null } */}
    </div>
  );
}

export default Register;
