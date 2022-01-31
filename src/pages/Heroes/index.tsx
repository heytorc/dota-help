import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from 'src/context/GlobalContext';

import IHero from 'src/commons/interface/IHero';

import HeroCard from 'src/components/hero/HeroCard';
import { HeroGrid } from 'src/styles/components/Hero';

import { handleHeroes as handleHeroesProvider } from 'src/providers/heroes.provider';

// import { Container } from './styles';

const Heroes: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(GlobalContext);

  const [heroes, setHeroes] = useState<IHero[]>([]);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate('/');
    } else {
      handleHeroes();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);


  const handleHeroes = async () => {
    const heroesArray = await handleHeroesProvider();

    setHeroes(heroesArray);
  };

  return (
    <>
      <HeroGrid>
        {heroes.map((hero: any) => (
          <HeroCard
            key={`key_hero_${hero.id}`}
            hero={hero}
          />
        ))}
      </HeroGrid>
    </>
  );
}

export default Heroes;