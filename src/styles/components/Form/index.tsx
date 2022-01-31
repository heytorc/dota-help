import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 1rem;
  border: 1px solid var(--grey-dark);
  padding: 0.625rem;
  background: var(--black);
  text-align: center;
  color: var(--white);

  min-width: 20rem;

  &::placeholder {
    color: var(--white);
    transition: .3s ease-in-out;
    text-align: center;
  }

  &:focus {
    background: var(--white);
    color: var(--black);
    transition: .3s ease-in-out;
  }

  &:focus::placeholder {
    color: var(--black);
    transition: .3s ease-in-out;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  margin-bottom: 1rem;
`;