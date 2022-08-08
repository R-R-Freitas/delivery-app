import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import setQuantityProduct from '../store/actions';

function ProductContainer({ product }) {
  const { id, name, price, url_image: urlImage } = product;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

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
  }, [changeQuantity, dispatch, id, price, quantity]);

  return (
    <div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ `Imagem ${name}` }
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
          min={ 0 }
          disabled
          value={ quantity }
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
    url_image: PropTypes.string,
  }).isRequired,
};

export default ProductContainer;
