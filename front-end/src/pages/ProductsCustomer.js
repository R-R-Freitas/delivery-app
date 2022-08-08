import React from 'react';
import Navbar from '../components/Navbar';
import ProductsContainer from '../components/ProductContainer';

function ProductsCustomer() {
  return (
    <div>
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      <div>
        <ProductsContainer />
      </div>
    </div>
  );
}

export default ProductsCustomer;
