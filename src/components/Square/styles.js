import styled from 'styled-components';

export const SquareContainer = styled.div`
  height: calc(100vh - 83px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SquareGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-column-gap: 1px;
`;

export const Square = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: ${({ isChecked }) => (isChecked ? '#ff634785' : '#fff')};
  border: 1px solid #000;
  border-radius: 5px;
  transition: 0.5s;

  &:hover {
    background-color: #80008085;
  }
`;

export const Icon = styled.div`
  color: ${({ playerColor }) =>
    playerColor === 'player_1' ? '#8dff60' : '#ff3d3d'};
  font-weight: bold;
  font-size: 30px;
`;
