import { useState } from 'react';

export function useSquareData() {
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

  return [squares, setSquares];
}
