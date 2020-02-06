import React, { useState } from 'react';

import { SquareContainer, SquareGrid, Square, Icon } from './styles';
import { useSquareData } from './square.hook';

export default function SquareBoard() {
  const [squares, setSquares] = useSquareData();
  const [xIcon, oIcon] = ['×', 'o'];
  const [oposity, setOposity] = useState(false);

  function handleOposity(square) {
    if (!square.isChecked) {
      setOposity(!oposity);
      if (!oposity) {
        square.player = 'player_1';
        square.icon = xIcon;
      } else {
        square.player = 'player_2';
        square.icon = oIcon;
      }

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
