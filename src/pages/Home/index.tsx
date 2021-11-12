import React from 'react';

import SteamService from 'src/services/steam.services';

import { ReactComponent as Logo } from 'src/assets/images/logo.svg';

import Container from 'src/styles/components/Container';

const Home: React.FC = () => {

  const steamAuth = async () => {
    const redirectUrl = await SteamService.getRedirectUrl();
    console.log(redirectUrl);
  };

  return (
    <Container>
      <Logo />

      <button onClick={steamAuth}>Entrar</button>
    </Container>
  );
}

export default Home;