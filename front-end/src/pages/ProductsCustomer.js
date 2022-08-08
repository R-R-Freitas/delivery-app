import React from 'react';
import Navbar from '../components/Navbar';
import ProductsContainer from '../components/ProductContainer';

function ProductsCustomer() {
  return (
    <div>
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      <div>
        <ProductsContainer />
        <button type="button" data-testid="customer_products__checkout-bottom-value">
          Ver Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductsCustomer;
