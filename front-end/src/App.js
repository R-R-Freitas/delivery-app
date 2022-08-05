import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import ProductsCostumer from './pages/ProductsCostumer';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <ProductsCostumer /> } />
    </Routes>
  );
}

export default App;
