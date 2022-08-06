import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import ProductsCostumer from './pages/ProductsCostumer';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <ProductsCostumer /> } />
    </Routes>
  );
}

export default App;
