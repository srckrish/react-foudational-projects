import React, { useState } from "react";

function useTictacToe() {
  const createBoard = (size) => Array(size).fill(null);

  const [squares, setSquares] = useState(createBoard(9));
  const [isXTurn, setIsXTurn] = useState(true);

  // console.log(squares);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = () => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };
  const winner = calculateWinner();
  const handleSquareClick = (getCurrentSquare) => {
    if (winner || squares[getCurrentSquare]) return;

    const cpySquares = [...squares];
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setSquares(cpySquares);
    setIsXTurn((prev) => !prev);
  };

  const getStatusMessage = () => {
    if (winner) return `${winner} wins!`;
    if (!squares.includes(null)) return `It is a draw`;
    return isXTurn ? `X turns` : `O turns`;
  };

  const handleResetButton = () => {
    setSquares(createBoard(9));
    setIsXTurn(true);
  };

  return {
    squares,
    handleSquareClick,
    getStatusMessage,
    handleResetButton,
  };
}

export default useTictacToe;
