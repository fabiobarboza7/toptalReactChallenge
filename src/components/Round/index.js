import React from 'react';

import { RoundText } from './styles';

export default function Round({ player }) {
  return (
    <RoundText playerColor={player}>
      {player === 'player_1' ? "Player 1's" : "Player 2's"} turn
    </RoundText>
  );
}
