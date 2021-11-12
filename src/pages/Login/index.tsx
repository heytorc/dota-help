/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import socketio from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

import useLocalStorage from 'src/commons/hooks/useLocalStorage';

import { GlobalContext } from 'src/context/GlobalContext';

import { ReactComponent as Logo } from 'src/assets/images/logo.svg';

import Container from 'src/styles/components/Container';

const Login: React.FC = () => {
  const socket = socketio(process.env.REACT_APP_API || '');
  const navigation = useNavigate();

  const { user, updateUser } = useContext(GlobalContext);
  const [localUser, setUser] = useLocalStorage("user", "");

  useEffect(() => {
    if (localUser.length > 0) {
      updateUser(JSON.parse(localUser));
    }

    socket.on('Backend:UserAuthenticated', (data) => {
      updateUser(data);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setUser(JSON.stringify(user));
      navigation('home');
    }
  }, [user]);

  const handleAuthenticateUser = async () => {
    window.open(`${process.env.REACT_APP_API}/auth/steam`);
  };

  return (
    <Container>
      {localUser.length === 0 && (
        <>
          <Logo />
          <button onClick={handleAuthenticateUser}>Entrar</button>
        </>
      )}
    </Container>
  );
}

export default Login;