import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckoutDelivery from '../components/CheckoutDelivery';
import CheckoutTable from '../components/CheckoutTable';
import Navbar from '../components/Navbar';
import setToken, { getUserLocalStorage } from '../services/functions';

function Checkout() {
  const navigate = useNavigate();
  const dataTotalSum = useSelector(({ totalSum }) => totalSum);
  console.log(dataTotalSum);

  useEffect(() => {
    const { token } = getUserLocalStorage();

    if (!token) return navigate('/');

    setToken(token);
  }, [navigate]);

  return (
    <div>
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      <CheckoutTable />
      <button
        type="button"
        data-testid="customer_products__button-cart"
      >
        Total: R$
        {' '}
        <span data-testid="customer_checkout__element-order-total-price">
          {dataTotalSum.toFixed(2).replace('.', ',')}
        </span>
      </button>
      <CheckoutDelivery />
    </div>
  );
}

export default Checkout;
