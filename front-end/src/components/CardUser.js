import React from 'react';
import PropTypes from 'prop-types';

function CardUser({ id, name, email, role, remove }) {
  return (
    <div>
      <p
        data-testid={ `admin_manage__element-user-table-item-number-${id}` }
      >
        {id}
      </p>
      <p
        data-testid={ `admin_manage__element-user-table-name-${id}` }
      >
        {name}
      </p>
      <p
        data-testid={ `admin_manage__element-user-table-email-${id}` }
      >
        {email}
      </p>
      <p
        data-testid={ `admin_manage__element-user-table-role-${id}` }
      >
        {role}
      </p>
      <button
        data-testid={ `admin_manage__element-user-table-remove-${id}` }
        type="button"
        onClick={ () => remove(id) }
      >
        Excluir
      </button>
    </div>
  );
}

CardUser.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default CardUser;
