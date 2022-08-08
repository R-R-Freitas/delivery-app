import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ item1, item2, item3 }) {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');

  const handleLogout = () => {
    localStorage.clear();

    return navigate('/');
  };

  return (
    <div>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        { item1 }
      </Link>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        { item2 }
      </Link>
      <Link to="/">{ item3 }</Link>
      <p data-testid="customer_products__element-navbar-user-full-name">
        { name }
      </p>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onChange={ handleLogout }
      >
        Sair
      </button>
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
