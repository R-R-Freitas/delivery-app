const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export default setToken;
