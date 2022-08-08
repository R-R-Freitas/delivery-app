import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductContainer from '../components/ProductContainer';
import { api } from '../services/constants';
// import setToken from '../services/functions';

function ProductsCustomer() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem('token');

    // if (!token) return navigate('/');

    // setToken(token);

    const getProducts = async () => {
      try {
        const { data } = await api.get('/product');
        console.log(data);

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
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      <div>
        { products?.map((product) => (
          <ProductContainer key={ product.id } product={ product } />
        ))}
        <button type="button" data-testid="customer_products__checkout-bottom-value">
          Ver Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductsCustomer;
