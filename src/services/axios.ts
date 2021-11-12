import axios from 'axios';

const backendAPI = axios.create({
  baseURL: 'http://localhost:4000'
});

export { backendAPI };