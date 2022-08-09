import { api } from './fechApi';

const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export default setToken;

export const saveLocalStorage = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
  // localStorage.setItem('name', payload.name);
  // localStorage.setItem('email', payload.email);
  // localStorage.setItem('role', payload.role);
  // localStorage.setItem('token', payload.token);
};

export const clearLocalStorage = () => {
  localStorage.removeItem('user');
  // localStorage.removeItem('name');
  // localStorage.removeItem('email');
  // localStorage.removeItem('role');
  // localStorage.removeItem('token');
};

export const getLocalStorage = () => JSON.parse(localStorage.getItem('user'));
