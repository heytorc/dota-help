/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import socketio from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from 'src/context/GlobalContext';

import { ReactComponent as Logo } from 'src/assets/images/logo.svg';

import Container from 'src/styles/components/Container';

const Login: React.FC = () => {
  const socket = socketio(process.env.REACT_APP_API || '');
  const navigation = useNavigate();

  const { user, updateUser } = useContext(GlobalContext);

  useEffect(() => {
    socket.on('Backend:UserAuthenticated', (data) => {
      updateUser(data);
    });
  }, []);

  useEffect(() => {
    console.log('user', user);
    if (Object.keys(user).length > 0)
      navigation('home');
  }, [user]);

  const handleAuthenticateUser = async () => {
    window.open(`${process.env.REACT_APP_API}/auth/steam`);
  };

  return (
    <Container>
      <Logo />

      <button onClick={handleAuthenticateUser}>Entrar</button>
    </Container>
  );
}

export default Login;