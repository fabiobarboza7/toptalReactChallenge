import React, { useState } from 'react';

import { SquareContainer, SquareGrid, Square, Icon } from './styles';
import { useSquareData } from './square.hook';
import Round from '../Round';

export default function SquareBoard() {
  const [squares, setSquares] = useSquareData();
  const [xIcon, oIcon] = ['×', 'o'];
  const [player_1, player_2] = ['player_1', 'player_2'];
  const [oposity, setOposity] = useState(false);
  const [nextPlayer, setNextPlayer] = useState(player_1);
  const [playerChoices, setPlayerChoices] = useState({
    player_1: [],
    player_2: [],
  });
  const corretAnswers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 1],
  ];

  function gameOver() {
    setPlayerChoices({
      player_1: [],
      player_2: [],
    });

    squares.map(square => {
      square.player = '';
      square.isChecked = false;
      square.icon = '';
      return true;
    });

    setOposity(false);
    setNextPlayer(player_1);
    setSquares([...squares]);
  }

  function verifyWinner(player) {
    const verifyMatchChoices = corretAnswers.map(match =>
      match.every(e => playerChoices[player].includes(e))
    );

    const isWinner = verifyMatchChoices.filter(choice => choice === true);

    if (isWinner.includes(true)) {
      alert(`${player} venceu`);
      gameOver();
    }
  }

  function handlePlayerChoices(square) {
    playerChoices[square.player] = [...playerChoices[square.player], square.id];
    setPlayerChoices({ ...playerChoices });
    verifyWinner(square.player);
  }

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

      handlePlayerChoices(square);
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
      {console.log(squares)}
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
