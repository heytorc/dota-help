import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 15rem;
`;

export const SideBarContent = styled.div`
  width: 20rem;
  min-height: 30rem;
  background: var(--grey);
  padding: 1rem;

  word-wrap: break-word;

  border-radius: 8px;
  margin-top: 3rem;

  & p {
    color: var(--black);
  }
`;

export const Warper = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: 10;
  flex-direction: column;
`;

export const Avatar = styled.div`
  margin-top: -3rem;

  & > img {
    border: 3px solid var(--green);
    border-radius: 100%;
  }
`;

