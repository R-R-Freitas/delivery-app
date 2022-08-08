import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ item1, item2, item3 }) {
  return (
    <div>
      <Link to="/" data-testid="customer_products__element-navbar-link-products">
        { item1 }
      </Link>
      <Link to="/" data-testid="customer_products__element-navbar-link-orders">
        { item2 }
      </Link>
      <Link to="/">{ item3 }</Link>
      <p data-testid="customer_products__element-navbar-user-full-name">
        Nome do usuário
      </p>
      <Link to="/" data-testid="customer_products__element-navbar-link-logout">Sair</Link>
    </div>
  );
}

Navbar.propTypes = {
  item1: PropTypes.string,
  item2: PropTypes.string.isRequired,
  item3: PropTypes.string,
};

Navbar.defaultProps = {
  item1: '',
  item3: '',
};

export default Navbar;
