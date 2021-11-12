/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { GlobalContext } from 'src/context/GlobalContext';

import { handleHeroes as handleHeroesProvider } from 'src/providers/heroes.provider';

import { ReactComponent as Logo } from 'src/assets/images/logo.svg';

import Container from 'src/styles/components/Container';

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
    updateUser(undefined);
  };

  const handleHeroes = async () => {
    const heroesArray = await handleHeroesProvider();

    console.log(heroesArray);

    setHeroes(heroesArray);
  };

  return (
    <Container>
      <Logo />

      <h1 style={{ color: '#fff' }}>LOGADO!</h1>

      <div>
        {heroes.map((hero: any) => <p key={`key_hero_${hero.id}`}>{hero.name}</p>)}
      </div>

      <button onClick={signOut}>Sair</button>
    </Container>
  );
}

export default Home;