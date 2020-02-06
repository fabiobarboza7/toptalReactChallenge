import styled from 'styled-components';

export const RoundText = styled.p`
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ playerColor }) =>
    playerColor === 'player_1' ? '#00806f' : '#ff3d3d'};
`;
