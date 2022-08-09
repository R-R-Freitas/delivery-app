import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import ProductContainer from '../components/ProductContainer';
import setToken, { clearLocalStorage, getLocalStorage } from '../services/functions';
import { api } from '../services/fechApi';

function ProductsCustomer() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const dataProducts = useSelector(({ productsData }) => productsData);

  const totalCar = () => {
    const arrProducts = Object.entries(dataProducts).map((product) => product[1]);

    const sum = arrProducts.reduce((acc, product) => {
      const totalValueProduct = product.quantity * product.priceProduct;

      return acc + totalValueProduct;
    }, 0);

    return sum.toFixed(2).replace('.', ',');
  };

  useEffect(() => {
    const { token } = getLocalStorage();

    if (!token) return navigate('/');

    setToken(token);

    const getProducts = async () => {
      try {
        const { data } = await api.get('/product');

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
          data-testid="customer_products__button-cart"
          onClick={ () => navigate('/customer/checkout') }
        >
          {`Ver Carrinho: R$
          ${totalCar()}
          `}
        </button>
      </div>
    </div>
  );
}

export default ProductsCustomer;
