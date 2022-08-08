import axios from 'axios';

export const MIN_LENGTH_NAME = 12;
export const MIN_LENGTH_PASSWORD = 6;

export const SET_QUANTITY = 'SET_QUANTITY';

export const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}`,
});
