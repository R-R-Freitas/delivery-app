import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckoutDelivery from '../components/CheckoutDelivery';
import CheckoutTable from '../components/CheckoutTable';
import Navbar from '../components/Navbar';
import setToken, { getUserLocalStorage } from '../services/functions';

function Checkout() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const dataTotalSum = useSelector(({ totalSum }) => totalSum);

  useEffect(() => {
    const { token } = getUserLocalStorage();

    if (!token) return navigate('/');

    setToken(token);
  }, [navigate]);

  useEffect(() => {
    const carShop = JSON.parse(localStorage.getItem('carShop'));

    setTotal(dataTotalSum);

    if (carShop.length === 0) {
      setTotal(0);
    } else {
      const products = carShop;

      const reduce = products.reduce((acc, item) => {
        const totalValueProduct = item.quantity * Number(item.price);

        return acc + totalValueProduct;
      }, 0);

      setTotal(reduce);
    }
  }, [total, dataTotalSum]);

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
          {total.toFixed(2).replace('.', ',')}
        </span>
      </button>
      <CheckoutDelivery />
    </div>
  );
}

export default Checkout;
