import React, { useState } from 'react';

import { SquareContainer, SquareGrid, Square, Icon } from './styles';
import { useSquareData } from './square.hook';
import Round from '../Round';

export default function SquareBoard() {
  const [squares, setSquares] = useSquareData();
  const [xIcon, oIcon] = ['×', 'o'];
  const [player_1, player_2] = ['Player 1', 'Player 2'];
  const [oposity, setOposity] = useState(false);
  const [nextPlayer, setNextPlayer] = useState(player_1);

  function handleNextPlayer(square) {
    return square.player === player_1
      ? setNextPlayer(player_2)
      : setNextPlayer(player_1);
  }

  function handleOposity(square) {
    if (!square.isChecked) {
      setOposity(!oposity);
      if (!oposity) {
        square.player = player_1;
        square.icon = xIcon;
      } else {
        square.player = player_2;
        square.icon = oIcon;
      }

      handleNextPlayer(square);
      setSquares([...squares]);
    }
  }

  function handleAddIcon(square) {
    handleOposity(square);
    square.isChecked = true;
    setSquares([...squares]);
  }

  return (
    <SquareContainer>
      <Round player={nextPlayer} />
      <SquareGrid>
        {squares.map(_square => (
          <Square key={_square.id} onClick={() => handleAddIcon(_square)}>
            <Icon playerColor={_square.player}>{_square.icon}</Icon>
          </Square>
        ))}
      </SquareGrid>
    </SquareContainer>
  );
}
