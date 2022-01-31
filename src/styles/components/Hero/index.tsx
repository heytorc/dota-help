import styled from 'styled-components';

export const HeroGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  flex-grow: 999;
`;

export const HeroName = styled.p<{ align?: 'left' | 'right' | 'center' }>`
  color: var(--white);
  text-align: ${props => props.align || 'left'};
`;

export const HeroCard = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  transition: .2s ease-in-out;
  cursor: pointer;
  opacity: 80%;

  width: 10rem;

  & img {
    border-radius: 8px;
    width: 100%;
    transition: .2s ease-in-out;
  }

  &:hover {
    opacity: 100%;
    transition: .2s ease-in-out;

    & p {
      color: var(--red);
      transition: .2s ease-in-out;
    }

    & img {
      transform: scale(1.2);
      transition: .2s ease-in-out;
    }
  }
`;