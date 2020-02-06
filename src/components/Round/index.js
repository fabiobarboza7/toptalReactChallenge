import React from 'react';

import { RoundText } from './styles';

export default function Round({ player }) {
  return <RoundText playerColor={player}>{player}</RoundText>;
}
