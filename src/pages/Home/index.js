import React, { useState } from 'react';

import { SquareContainer, Square, Icon } from './styles.js'

export default function Home() {
  const [squares, setSquares] = useState([
    {id: 1, isActive: false},
    {id: 2, isActive: false},
    {id: 3, isActive: false},
    {id: 4, isActive: false},
    {id: 5, isActive: false},
    {id: 6, isActive: false},
    {id: 7, isActive: false},
    {id: 8, isActive: false},
    {id: 9, isActive: false},
  ]);

  function handleAddIcon(square) {
    square.isActive = !square.isActive;
    setSquares([...squares])
  }

  return (
    <SquareContainer>
      {console.log(squares)}
      {squares.map(_square => (
        <Square key={_square.id} onClick={() => handleAddIcon(_square)}>
          {_square.isActive && <Icon>×</Icon>}
        </Square>
      ))}
    </SquareContainer>
  )
}