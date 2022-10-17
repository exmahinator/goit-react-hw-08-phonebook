import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.baseURL = 'https://63458ea2745bd0dbd36bb774.mockapi.io/api/v1';

// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export default axios;

// Shirahama Kenichi
// s.kenichi@ukr.net
// Shirahama123
