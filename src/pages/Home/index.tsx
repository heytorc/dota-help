/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import SideBar from 'src/components/menu/SideBar';

import { Warper } from 'src/styles/components/Menu';
import Container from 'src/styles/components/Container';

const Home: React.FC = () => {
  return (
    <Container
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="flex-start"
    >

      <SideBar />

      <Warper>
      </Warper>
    </Container>
  );
}

export default Home;