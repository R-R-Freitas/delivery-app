import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardSalesProduct({ price, status, date, id, address, number, isSale }) {
  return (
    <Link to={ `/${isSale ? 'seller' : 'customer'}/orders/${id}` }>
      <div>
        <p
          data-testing={ `${
            isSale ? 'seller' : 'customer'}_orders__element-order-id-${id}` }
        >
          {id}
        </p>
        <p
          data-testing={ `${
            isSale ? 'seller' : 'customer'}_orders__element-card-price-${id}` }
        >
          {price}
        <p>
          R$
          {' '}
          <span
            data-testid={ `data-testing={ `${
            isSale ? 'seller' : 'customer'}_orders__element-card-price-${id}` }
          >
            {Number(price).toFixed(2).replace('.', ',')}
          </span>
        </p>
        <p
          data-testid={ `${
            isSale ? 'seller' : 'customer'}_orders__element-delivery-status-${id}` }
        >
          {status}
        </p>
        <p
          data-testid={ `${
            isSale ? 'seller' : 'customer'}_orders__element-order-date-${id}` }
        >
          {date}
        </p>
        {address && number && (
          <p
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            {address}
            ,
            {number}
          </p>
        )}

      </div>
    </Link>
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
