import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutDelivery from '../components/CheckoutDelivery';
import CheckoutTable from '../components/CheckoutTable';
import Navbar from '../components/Navbar';

function Checkout() {
  const dataTotalSum = useSelector(({ totalSum }) => totalSum);
  console.log(dataTotalSum);

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
