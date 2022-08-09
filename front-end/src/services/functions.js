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

export const getLocalStorage = () => JSON.parse(localStorage.getItem('user'));
