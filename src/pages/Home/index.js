import React, { useState } from 'react';

import { SquareContainer, Square, Icon } from './styles';

export default function Home() {
  const [xIcon, oIcon] = ['×', 'o'];

  const [squares, setSquares] = useState([
    { id: 1, player: '', isChecked: false },
    { id: 2, player: '', isChecked: false },
    { id: 3, player: '', isChecked: false },
    { id: 4, player: '', isChecked: false },
    { id: 5, player: '', isChecked: false },
    { id: 6, player: '', isChecked: false },
    { id: 7, player: '', isChecked: false },
    { id: 8, player: '', isChecked: false },
    { id: 9, player: '', isChecked: false },
  ]);

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
      {squares.map(_square => (
        <Square key={_square.id} onClick={() => handleAddIcon(_square)}>
          <Icon playerColor={_square.player}>{_square.icon}</Icon>
        </Square>
      ))}
    </SquareContainer>
  );
}
