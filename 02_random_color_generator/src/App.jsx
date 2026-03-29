import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

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

  const handleRgbColorGenerator = () => {
    const r = randomColorUtitity(256);
    const g = randomColorUtitity(256);
    const b = randomColorUtitity(256);

    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
    console.log(rgbColor);
  };

  const handleColorType = () => {
    if (typeOfColor === "hex") handleHexColorGenerator();
    else handleRgbColorGenerator();
  };

  return (
    <div
      className="h-screen w-full overflow-hidden relative transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center items-end h-full py-5">
        <div className="flex justify-center flex-col items-center flex-wrap gap-7 mx-auto max-w-2xl">
          <div className="bg-white text-green-800 rounded-full text-sm sm:text-xl font-medium px-5 py-2">
            {color}
          </div>
          <div className="bg-white text-green-800 rounded-full text-sm sm:text-xl font-medium flex flex-wrap justify-around items-center gap-3 sm:gap-5 px-4 py-2">
            <button
              className={`rounded-full px-5 py-2 ${typeOfColor === "hex" ? "bg-green-500 text-white" : ""}`}
              onClick={() => {
                setTypeOfColor("hex");
                setColor("#000000");
              }}
            >
              Hex Color
            </button>
            <button
              className={`rounded-full px-5 py-2 ${typeOfColor === "rgb" ? "bg-green-500 text-white" : ""}`}
              onClick={() => {
                setTypeOfColor("rgb");
                setColor("rgb(0, 0, 0)");
              }}
            >
              RGB Color
            </button>
            <button
              className="rounded-full px-5 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
              onClick={() => handleColorType()}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
