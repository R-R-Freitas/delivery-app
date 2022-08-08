import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ProductContainer({ product }) {
  const [quantity, setQuantity] = useState(0);

  // const handleTotalPrice = (qtd, price) => {
  //   setTotalPrice((currValue) => currValue + (qtd * price));
  // };

  const changeQuantity = (action) => {
    if (action === 'decrease') {
      return setQuantity((currValue) => currValue - 1);
    }

    return setQuantity((currValue) => currValue + 1);
  };

  useEffect(() => {
    if (quantity < 0) return setQuantity(0);
  }, [quantity]);

  return (
    <div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.url_image }
        alt={ `Imagem ${product.name}` }
      />
      <p
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        {Number(product.price)}
      </p>
      <p
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}
      </p>
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          type="button"
          onClick={ () => changeQuantity('decrease') }
        >
          -
        </button>
        <input
          id={ product.id }
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
          type="number"
          disabled
          value={ quantity }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
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
