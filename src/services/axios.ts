import axios from 'axios';

const backendAPI = axios.create({
  baseURL: process.env.REACT_APP_API
});

export { backendAPI };