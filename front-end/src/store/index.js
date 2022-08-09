import { configureStore } from '@reduxjs/toolkit';
import productsData from './reducers/productsData';

const store = configureStore({
  reducer: {
    productsData,
  },
});

export default store;
