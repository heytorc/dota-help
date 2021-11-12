import { steamAPI } from 'src/services/axios';

const { REACT_APP_DOTA_APP_ID } = process.env;

export const handleHeroes = async () => {
  const { data: { result: { heroes = [] } } } = await steamAPI.get(`/IEconDOTA2_${REACT_APP_DOTA_APP_ID}/GetHeroes/v1`);

  return heroes;
};