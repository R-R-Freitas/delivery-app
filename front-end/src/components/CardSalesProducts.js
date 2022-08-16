import React from 'react';
import PropTypes from 'prop-types';
import { OrderCard, ColumnContainer, LinkCard,
  StatusContainer, Status } from '../styles/OrderCard';

function CardSalesProduct({ price, status, date, id, address, number, isSale }) {
  return (
    <LinkCard to={ `/${isSale ? 'seller' : 'customer'}/orders/${id}` }>
      <OrderCard>
        <ColumnContainer>
          Pedido
          {' '}
          <span
            data-testid={ `${
              isSale ? 'seller' : 'customer'}_orders__element-order-id-${id}` }
          >
            {id}
          </span>
        </ColumnContainer>
        <StatusContainer>
          <Status
            data-testid={ `${
              isSale ? 'seller' : 'customer'}_orders__element-delivery-status-${id}` }
          >
            {status}
          </Status>
        </StatusContainer>
        <ColumnContainer>
          <p>
            R$
            {' '}
            <span
              data-testid={ `${
                isSale ? 'seller' : 'customer'}_orders__element-card-price-${id}` }
            >
              {Number(price).toFixed(2).replace('.', ',')}
            </span>
          </p>
          <p
            data-testid={ `${
              isSale ? 'seller' : 'customer'}_orders__element-order-date-${id}` }
          >
            {date}
          </p>
        </ColumnContainer>
        {address && number && (
          <p
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            {address}
            ,
            {number}
          </p>
        )}

      </OrderCard>
    </LinkCard>
  );
}

CardSalesProduct.propTypes = {
  price: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  address: PropTypes.string,
  number: PropTypes.string,
  isSale: PropTypes.bool.isRequired,

};

CardSalesProduct.defaultProps = {
  address: '',
  number: '',
};

export default CardSalesProduct;
