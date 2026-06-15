import React, { useState } from "react";
import useTictacToe from "./useTictacToe";

function App() {
  const {
    squares,
    handleSquareClick,
    getStatusMessage,
    handleResetButton,
    pattern,
  } = useTictacToe();

  const hasGameStarted = squares.some((square) => square !== null);

  return (
    <div className="wrapper min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="game-container w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-lg p-6">
        <div className="status text-xl sm:text-2xl font-semibold text-center mb-4">
          {getStatusMessage()}
        </div>
        <button
          onClick={handleResetButton}
          className={`w-full mb-6 rounded-lg bg-blue-500 px-4 py-3 text-white font-medium transition-colors hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed `}
          disabled={hasGameStarted ? false : true}
        >
          Reset Game
        </button>
        <div className="board grid grid-cols-3 w-full">
          {squares.map((element, index) => (
            <div
              key={index}
              className={`
                flex items-center justify-center
                aspect-square
                border-2 border-gray-400
                text-3xl sm:text-5xl
                font-bold
                cursor-pointer
                transition-colors
                disabled:cursor-not-allowed
                ${
                  pattern?.includes(index)
                    ? "bg-green-200 text-green-800"
                    : "bg-white hover:bg-gray-100"
                }
              `}
              onClick={() => handleSquareClick(index)}
              disabled={element !== null ? true : false}
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
