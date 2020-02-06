import styled from 'styled-components';

export const SquareContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 60px 60px;
  grid-column-gap: 0;
`;

export const Square = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  background-color: white;
  border: 1px solid #000;
`;

export const Icon = styled.div`
  color: ${({ playerColor }) => (playerColor === 'player_1' ? 'blue' : 'red')};
`;
