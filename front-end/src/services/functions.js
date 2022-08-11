import { api } from './fechApi';

const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export default setToken;

export const saveLocalStorage = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
};

export const clearLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserLocalStorage = () => JSON.parse(localStorage.getItem('user'));

export const getProductsLocalStorage = () => JSON.parse(localStorage.getItem('products'));

export const getCarShopLocalStorage = () => JSON.parse(localStorage.getItem('carShop'));
