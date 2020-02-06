import { useState } from 'react';

export function useNextPlayer(player) {
  const [nextPlayer, setNextPlayer] = useState(player);
  return [nextPlayer, setNextPlayer];
}
