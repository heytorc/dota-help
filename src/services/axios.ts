import axios from 'axios';

const backendAPI = axios.create({
  baseURL: 'http://localhost:4000'
});

const steamAPI = axios.create({
  baseURL: `${process.env.REACT_APP_STEAM_API_URL}`,
  params: {
    key: process.env.REACT_APP_STEAM_API_KEY,
    language: process.env.REACT_APP_STEAM_LANGUAGE
  }
});

const dotaImagesAPI = axios.create({
  baseURL: `${process.env.REACT_APP_DOTA_IMAGES_API}`
});

export { backendAPI, steamAPI, dotaImagesAPI };