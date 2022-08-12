import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/fechApi';
import { getCarShopLocalStorage } from '../services/functions';

function CheckoutDelivery() {
  const navigate = useNavigate();
  const totalPrice = useSelector(({ totalSum }) => totalSum);

  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');

  const handleSubmit = async () => {
    try {
      const carShopLocalStorage = getCarShopLocalStorage();

      const saleProducts = carShopLocalStorage.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
      }));

      const objectRequest = {
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        sellerId: Number(sellerId),
        saleProducts,
      };

      console.log(objectRequest);
      const { data } = await api.post('/sale', objectRequest);
      console.log(data);

      // if (data.role === 'seller') return navigate('/seller/orders');

      navigate(`/customer/orders/${data.saleId}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await api.get('/admin/users');

      const filteredSellers = data.filter(({ role }) => role === 'seller');

      setSellers(filteredSellers);
    };

    getUsers();
  }, []);

  return (
    <form>
      <h1>Detalhes e Endereço para entrega</h1>

      <label htmlFor="seller-input">
        P. Vendedora Responsável
        <select
          data-testid="customer_checkout__select-seller"
          value={ sellerId }
          onChange={ ({ target: { value } }) => setSellerId(value) }
        >
          {sellers.map(({ id, name: sellerName }) => (
            <option key={ id } value={ id }>
              { sellerName }
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="address-input">
        Endereço
        <input
          data-testid="customer_checkout__input-address"
          type="text"
          value={ deliveryAddress }
          onChange={ ({ target: { value } }) => setDeliveryAddress(value) }
          placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
        />
      </label>

      <label htmlFor="deliveryNumber-input">
        Número
        <input
          data-testid="customer_checkout__input-addressNumber"
          type="text"
          value={ deliveryNumber }
          onChange={ ({ target: { value } }) => setDeliveryNumber(value) }
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
