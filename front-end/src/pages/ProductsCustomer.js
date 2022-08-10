import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import ProductContainer from '../components/ProductContainer';
import setToken, { clearLocalStorage, getLocalStorage } from '../services/functions';
import { api } from '../services/fechApi';

function ProductsCustomer() {
  const navigate = useNavigate();

  const dataTotalSum = useSelector(({ totalSum }) => totalSum);

  console.log(dataTotalSum);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { token } = getLocalStorage();

    if (!token) return navigate('/');

    setToken(token);

    const getProducts = async () => {
      try {
        const { data } = await api.get('/product');

        if (!localStorage.getItem('products')) {
          const arrayProduct = data.map((item) => {
            const { id, price } = item;

            return {
              id,
              price,
              quantity: 0,
            };
          });
          localStorage.setItem('products', JSON.stringify(arrayProduct));
        }
        return setProducts(data);
      } catch (error) {
        clearLocalStorage();

        return navigate('/');
      }
    };

    getProducts();
  }, [navigate]);

  return (
    <div>
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      <div>
        { products?.map((product) => (
          <ProductContainer key={ product.id } product={ product } />
        ))}
        <button
          type="button"
          data-testid="data-testid='customer_products__button-cart"
          onClick={ () => navigate('/customer/checkout') }
          disabled={ dataProducts === '0,00' }
        >
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            {dataTotalSum}
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProductsCustomer;
