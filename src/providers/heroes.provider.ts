import { backendAPI } from 'src/services/axios';

import IHero from 'src/commons/interface/IHero';

export const handleHeroes = async () => {
  try {
    const { data: heroes = [] } : { data: IHero[] } = await backendAPI.get(`/heroes`);

    return heroes;
  } catch (error) {
    throw new Error("Error to get heroes");
  }
};

export const handleHeroImage = (heroName: string, size: 'small' | 'large' | 'full' | 'vert'): string => {
  const sizeObject = {
    'small': 'sb',
    'large': 'lg',
    'full': 'full',
    'vert': 'vert'
  }

  const realHeroName = heroName.split('npc_dota_hero_')[1] || heroName;

  return `${process.env.REACT_APP_DOTA_IMAGES_API}/heroes/${realHeroName}_${sizeObject[size]}.png`;
};