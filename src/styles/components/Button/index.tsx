import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem;
  border-radius: 1rem;

  border: 1px solid var(--white);
  background: var(--black);
  color: var(--white);
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;
  
  transition: .3s ease-in-out;

  &:hover {
    background: var(--white);
    color: var(--black);
    transition: .3s ease-in-out;
  }
`;