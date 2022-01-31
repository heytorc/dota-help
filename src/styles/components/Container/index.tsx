import styled from 'styled-components';

interface IContainer {
  justifyContent?: 'center' | 'flex-start' | 'space-between';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
}

const Container = styled.div<IContainer>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  gap: 10px;

  width: 100%;
  padding: 1rem 2rem;
`;

export default Container;