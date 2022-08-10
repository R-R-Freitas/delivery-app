import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import setQuantityProduct from '../store/actions';

function ProductContainer({ product }) {
  const { id, name, price, urlImage } = product;
  const dispatch = useDispatch();

  const getProductsLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    return products;
  };

  const getQuantity = () => {
    const getLocalStorage = getProductsLocalStorage();
    const productsCurr = getLocalStorage
      .find((item) => item.id === Number(id)).quantity || 0;
    return productsCurr;
  };

  const [quantity, setQuantity] = useState(() => getQuantity());
  const [productId, setProductId] = useState();

  const changeQuantity = useCallback((action, idCurr) => {
    const idNumber = Number(idCurr);
    setProductId(idNumber);

    const products = getProductsLocalStorage();

    const productLocalStorage = products.find((item) => item.id === idNumber);

    if (action === 'decrease') {
      if (productLocalStorage.quantity < 0) setQuantity(0);
      setQuantity(productLocalStorage.quantity ? productLocalStorage.quantity - 1 : 0);
      return;
    }

    return setQuantity(productLocalStorage.quantity + 1);
  }, []);

  useEffect(() => {
    if (quantity < 0) setQuantity(0);

    const products = getProductsLocalStorage();

    const newProducts = products.map((item) => {
      if (item.id === Number(productId)) {
        return {
          ...item,
          quantity,
        };
      }

      return item;
    });

    localStorage.setItem('products', JSON.stringify(newProducts));
  }, [quantity]);

  useEffect(() => {
    const totalCar = () => {
      const productsLocalStorage = getProductsLocalStorage();

      if (productsLocalStorage.length !== 0) {
        const reduce = productsLocalStorage.reduce((acc, item) => {
          const totalValueProduct = item.quantity * item.price;

          return acc + totalValueProduct;
        }, 0);

        const soma = reduce.toFixed(2).replace('.', ',');

        dispatch(setQuantityProduct(soma));

        return soma;
      }
    };

    totalCar();
  }, [quantity]);

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
          id={ id }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ (e) => changeQuantity('decrease', e.target.id) }
        >
          -
        </button>
        <input
          id={ id }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          value={ quantity }
          onChange={ (e) => setQuantity(e.target.value) }
        />
        <button
          id={ id }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ (e) => changeQuantity('increase', e.target.id) }
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
