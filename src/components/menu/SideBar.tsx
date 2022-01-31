import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalContext';

import { SideBarContent, SideBarContainer, Avatar } from 'src/styles/components/Menu';
import Button from 'src/components/Button';

// import { Container } from './styles';

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useContext(GlobalContext);

  const handleSignOut = () => {
    signOut();

    navigate('/');
  };

  return (
    <SideBarContainer>
      <SideBarContent>
        <Avatar>
          <img src={user.avatar.medium} alt="avatar" />
        </Avatar>
        <p>{user.username}</p>

        <a href={user.profile} target="_blank" rel="noreferrer">{user.profile}</a>

        <ul>
          <li><Link to={'/home'}>Inventário</Link></li>
          <li><Link to={'/matches'}>Partidas</Link></li>
          <li><Link to={'/heroes'}>Heróis</Link></li>
          <li><Link to={'/items'}>Itens</Link></li>
        </ul>

        <Button onClick={handleSignOut}>Sair</Button>
      </SideBarContent>
    </SideBarContainer>
  );
}

export default SideBar;