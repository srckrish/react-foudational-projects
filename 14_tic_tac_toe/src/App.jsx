import React, { useState } from "react";
import useTictacToe from "./useTictacToe";

function App() {
  const { squares, handleSquareClick, getStatusMessage, handleResetButton } =
    useTictacToe();

  return (
    <div className="wrapper">
      <div className="game-container max-w-2xl">
        <div className="status">{getStatusMessage()}</div>
        <button onClick={handleResetButton}>Reset Game</button>
        <div className="board grid grid-cols-3 items-center">
          {squares.map((element, index) => (
            <div
              key={index}
              className="cell cursor-pointer border-2 h-12"
              onClick={() => handleSquareClick(index)}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
