import { EIGTH, FIVE, FOUR, SEVEN, TEN, ZERO } from './constants';
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
  localStorage.removeItem('products');
  localStorage.removeItem('carShop');
};

export const getUserLocalStorage = () => JSON.parse(localStorage.getItem('user'));

export const getProductsLocalStorage = () => JSON.parse(localStorage.getItem('products'));

export const getCarShopLocalStorage = () => JSON.parse(localStorage.getItem('carShop'));

export const serializeDate = (dateRaw) => {
  const day = dateRaw.substring(EIGTH, TEN);
  const month = dateRaw.substring(FIVE, SEVEN);
  const year = dateRaw.substring(ZERO, FOUR);

  return `${day}/${month}/${year}`;
};
