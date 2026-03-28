import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");

  const randomColorUtitity = (length) => {
    return Math.floor(Math.random() * length);
  };

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const handleHexColorGenerator = () => {
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
      hexColor = hexColor + hex[randomColorUtitity(hex.length)];
    }
    setColor(hexColor);
    console.log(`Hex Color: ${hexColor}`);
  };

  return (
    <div
      className={`h-screen w-full overflow-hidden `}
      style={{ backgroundColor: color }}
    >
      <div className="inset-0 bottom-5 flex justify-center align-center">
        <button
          className="absolute bottom-5 text-2xl bg-cyan-600 mx-auto border-2 p-5 rounded-2xl  text-center hover:bg-red-600 text-white font-extrabold"
          onClick={() => {
            handleHexColorGenerator();
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
