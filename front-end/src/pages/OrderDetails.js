import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TableOrder from '../components/TableOrder';
import Navbar from '../components/Navbar';
import { api } from '../services/fechApi';
import setToken, { getUserLocalStorage } from '../services/functions';
import { TEN } from '../services/constants';

function OrdersDetail() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const saleId = pathname.replace('/customer/orders/', '');

  const status = 'status';

  const [dataSale, setDataSale] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOrderDelivered = () => {
    if (dataSale.status === 'Em Trânsito') return setIsDisabled(false);
    return setIsDisabled(true);
  };

  useEffect(() => {
    const { token } = getUserLocalStorage();

    if (!token) return navigate('/');

    setToken(token);

    const getSaleById = async () => {
      const { data } = await api.get(`/sale/${saleId}`);

      setDataSale(data);
    };

    getSaleById();
  }, [navigate, saleId]);

  return (
    <div>
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      <h1>Detalhes do Pedido</h1>
      <div>
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          {`PEDIDO ${dataSale.length !== 0 ? dataSale.id : ''}`}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P.Vend ${dataSale.length !== 0 ? dataSale.seller.name : ''}`}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {dataSale.length !== 0
            ? new Date(dataSale.saleDate).toLocaleString('pt-BR').slice(0, TEN) : ''}

        </p>
        <p
          data-testid={
            `customer_order_details__element-order-details-label-delivery-${status}`
          }
        >
          {dataSale.length !== 0 ? dataSale.status : ''}
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          onClick={ handleOrderDelivered }
          disabled={ isDisabled }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <div>
        <TableOrder />
      </div>
    </div>
  );
}

export default OrdersDetail;
