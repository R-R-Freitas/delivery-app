import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/constants';
import setToken from '../services/functions';

function ProductsContainer() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const changeQuantity = (action) => {
    if (action === 'decrease') return setQuantity((currValue) => currValue - 1);

    return setQuantity((currValue) => currValue + 1);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) return navigate('/');

    setToken(token);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get('/product');

        return setProducts(data);
      } catch (error) {
        console.log(error);

        localStorage.clear();

        return navigate('/');
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      { products?.map((product) => (
        <div key={ product.id }>
          <img
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            src={ product.url_image }
            alt="Imagem da bebida"
          />
          <p data-testid={ `customer_products__element-card-price-${product.id}` }>
            { product.price }
          </p>
          <p data-testid={ `customer_products__element-card-title-${product.id}` }>
            { product.name }
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
      )) }
    </div>
  );
}

export default ProductsContainer;
