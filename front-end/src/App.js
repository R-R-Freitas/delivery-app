import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/login/Login';
import ProductsCustomer from './pages/ProductsCustomer';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <ProductsCustomer /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
