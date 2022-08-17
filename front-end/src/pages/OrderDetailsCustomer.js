import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TableOrder from '../components/TableOrder';
import Navbar from '../components/Navbar';
import { api } from '../services/fechApi';
import setToken, { getUserLocalStorage, serializeDate } from '../services/functions';
import { DetailsContainer, StatusDetails, BoldText,
  CheckButton, TitleDetails } from '../styles/OrderDetails';

function OrderDetailsCustomer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const saleId = pathname.replace('/customer/orders/', '');

  const status = 'status';

  const [dataSale, setDataSale] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOrderDelivered = () => {
    console.log(dataSale.status);
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
      <TitleDetails>Detalhes do Pedido</TitleDetails>
      <DetailsContainer>
        <BoldText
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`PEDIDO ${dataSale.length !== 0 ? dataSale.id : ''}`}
        </BoldText>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P.Vend: ${dataSale.length !== 0 ? dataSale.seller.name : ''}`}
        </p>
        <BoldText
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {dataSale.length !== 0
            ? serializeDate(dataSale.saleDate) : ''}

        </BoldText>
        <StatusDetails
          data-testid={
            `customer_order_details__element-order-details-label-delivery-${status}`
          }
        >
          {dataSale.length !== 0 ? dataSale.status : ''}
        </StatusDetails>
        <CheckButton
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          onClick={ handleOrderDelivered }
          disabled={ isDisabled }
        >
          MARCAR COMO ENTREGUE
        </CheckButton>
      </DetailsContainer>
      <div>
        <TableOrder />
      </div>
    </div>
  );
}

export default OrderDetailsCustomer;
