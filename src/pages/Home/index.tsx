import React from 'react';
import { ReactComponent as Logo } from 'src/assets/images/logo.svg';

import Container from 'src/styles/components/Container';

const Home: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
}

export default Home;