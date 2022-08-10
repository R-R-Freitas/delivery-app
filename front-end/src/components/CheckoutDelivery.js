import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import setToken, { getLocalStorage } from '../services/functions';

function CheckoutDelivery() {
  // const navigate = useNavigate();

  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');

  const handleSubmit = async () => {
    try {
      console.log({ seller, address, numberAddress });
      //     const { data } = await api.post('/admin', { seller, address, numberAddress });

      //     saveLocalStorage(data);

      //     setName('');
      //     setEmail('');
      //     setPassword('');

      //     if (data.role === 'seller') return navigate('/seller/orders');

      //     navigate('/customer/products');
    } catch (error) {
      console.log(error);

      //     setRegisterFailed(true);
    }
  };

  // useEffect(() => {
  //   const { token } = getLocalStorage();

  //   if (!token) return navigate('/');

  //   setToken(token);
  // }, [navigate]);

  return (
    <form>
      <h1>Detalhes e Endereço para entrega</h1>

      <label htmlFor="seller-input">
        P. Vendedora Responsável
        <select
          data-testid="customer_checkout__select-seller"
          value={ seller }
          onChange={ ({ target: { value } }) => setSeller(value) }
        >
          <option value="seller1">Vendedor 1</option>
          <option value="seller2">Vendedor 2</option>
        </select>
      </label>

      <label htmlFor="address-input">
        Endereço
        <input
          data-testid="customer_checkout__input-address"
          type="text"
          value={ address }
          onChange={ ({ target: { value } }) => setAddress(value) }
          placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
        />
      </label>

      <label htmlFor="numberAddress-input">
        Número
        <input
          data-testid="customer_checkout__input-addressNumber"
          type="text"
          value={ numberAddress }
          onChange={ ({ target: { value } }) => setNumberAddress(value) }
          placeholder="198"
        />
      </label>

      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ handleSubmit }
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}

export default CheckoutDelivery;
