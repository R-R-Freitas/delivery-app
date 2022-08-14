import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardSalesProduct({ price, status, date, id }) {
  console.log('idItem', id);
  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        <p
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          {id}
        </p>
        <p>
          R$
          {' '}
          <span
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            {Number(price).toFixed(2).replace('.', ',')}

          </span>
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {status}

        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {date}

        </p>
      </div>
    </Link>
  );
}

CardSalesProduct.propTypes = {
  price: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,

};

export default CardSalesProduct;
