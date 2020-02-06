import { useState } from 'react';

export function usePlayerChoice() {
  const [playerChoices, setPlayerChoices] = useState({
    player_1: [],
    player_2: [],
  });

  return [playerChoices, setPlayerChoices];
}
