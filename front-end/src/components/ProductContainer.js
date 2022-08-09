import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import setQuantityProduct from '../store/actions';

function ProductContainer({ product }) {
  const { id, name, price, urlImage } = product;

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  console.log(quantity);

  const changeQuantity = useCallback((action) => {
    if (action === 'decrease') {
      setQuantity((currValue) => currValue - 1);
      return;
    }

    return setQuantity((currValue) => currValue + 1);
  }, []);

  useEffect(() => {
    if (quantity < 0) return setQuantity(0);
  }, [quantity]);

  useEffect(() => {
    const priceProduct = Number(price);

    dispatch(setQuantityProduct({ id, quantity, priceProduct }));
  }, [dispatch, id, price, quantity]);

  return (
    <div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        width="80"
      />
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { Number(price).toFixed(2).replace('.', ',') }
      </p>
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ () => changeQuantity('decrease') }
        >
          -
        </button>
        <input
          id={ id }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          value={ quantity }
          onChange={ ({ target }) => console.log(target.value) }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ () => changeQuantity('increase') }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductContainer;
