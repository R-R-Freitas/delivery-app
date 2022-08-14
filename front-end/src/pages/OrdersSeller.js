import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/fechApi';
import CardSalesProduct from '../components/CardSalesProducts';
import Navbar from '../components/Navbar';
import setToken, { getUserLocalStorage } from '../services/functions';

function OrdersSeller() {
  const navigate = useNavigate();

  const [sallers, setSellers] = useState();

  console.log(sallers);

  useEffect(() => {
    const { token } = getUserLocalStorage();

    if (!token) return navigate('/');

    setToken(token);

    api.get('/sale/seller').then((response) => {
      setSellers(response.data);
    });
  }, [navigate]);

  return (
    <div>
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      {sallers && sallers.map((sale) => (
        <CardSalesProduct
          key={ sale.id }
          id={ sale.id }
          price={ sale.totalPrice }
          address={ sale.deliveryAddress }
          number={ sale.deliveryNumber }
          date={ sale.saleDate }
          status={ sale.status }
          isSale
        />
      ))}
    </div>
  );
}

export default OrdersSeller;
