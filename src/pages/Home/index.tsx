/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import LazyLoad from "react-lazyload";

import { GlobalContext } from 'src/context/GlobalContext';

import { handleHeroes as handleHeroesProvider, handleHeroImage } from 'src/providers/heroes.provider';

import { HeroGrid, HeroName } from 'src/styles/components/Hero';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { updateUser, user } = useContext(GlobalContext);

  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate('/');
    } else {
      handleHeroes();
    }
  }, [user]);

  const signOut = () => {
    updateUser({});
  };

  const handleHeroes = async () => {
    const heroesArray = await handleHeroesProvider();

    setHeroes(heroesArray);
  };

  return (
    <div>
      <HeroGrid>
        {heroes.map((hero: any) => (
          <div key={`key_hero_${hero.id}`}>
            <LazyLoad height={250} once>
              <img
                src={handleHeroImage(hero.name, 'large')}
                alt={hero.name}
              />
            </LazyLoad>
            <HeroName>{hero.name}</HeroName>
          </div>
        ))}
      </HeroGrid>

      <button onClick={signOut}>Sair</button>
    </div>
  );
}

export default Home;