/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import socketio from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { FaSteam } from 'react-icons/fa';

import useLocalStorage from 'src/commons/hooks/useLocalStorage';

import { GlobalContext } from 'src/context/GlobalContext';

import Button from 'src/components/Button';

import { ReactComponent as Logo } from 'src/assets/images/logo.svg';

import Container from 'src/styles/components/Container';

const Login: React.FC = () => {
  const socket = socketio(process.env.REACT_APP_API || '');
  const navigation = useNavigate();

  const { user, updateUser } = useContext(GlobalContext);
  const [localUser, setUser] = useLocalStorage("user", "");

  useEffect(() => {
    if (localUser.steamid) {
      updateUser(localUser);
    }

    socket.on('Backend:UserAuthenticated', (data) => {
      updateUser(data);
    });
  }, []);

  useEffect(() => {
    if (user.steamid) {
      setUser(user);
      navigation('home');
    }
  }, [user]);

  const handleAuthenticateUser = async () => {
    window.open(`${process.env.REACT_APP_API}/auth/steam`);
  };

  return (
    <Container>
      {!user.steamid && (
        <>
          <Logo />
          <br/>
          <Button
            onClick={handleAuthenticateUser}
          >
            <FaSteam size={30} /> Entre com sua conta Steam
          </Button>
        </>
      )}
    </Container>
  );
}

export default Login;