import styled from 'styled-components';

export const RoundText = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ playerColor }) => (playerColor === 'Player 1' ? 'blue' : 'red')};
`;
