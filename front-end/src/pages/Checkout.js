import React from 'react';
import CheckoutDelivery from '../components/CheckoutDelivery';
import CheckoutTable from '../components/CheckoutTable';
import Navbar from '../components/Navbar';

function Checkout() {
  return (
    <div>
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      <CheckoutTable />
      <p data-testid="customer_checkout__element-order-total-price">total da compra</p>
      <CheckoutDelivery />
    </div>
  );
}

export default Checkout;
