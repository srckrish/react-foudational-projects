import React, { useState } from "react";

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

  return (
    <div
      className="h-screen w-full overflow-hidden relative"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center items-end h-full gap-4 py-5">
        <button
          className="text-2xl bg-cyan-600 border-2 p-5 rounded-2xl hover:bg-red-600 text-white font-extrabold"
          onClick={handleHexColorGenerator}
        >
          Generate Hex Color
        </button>

        <button
          className="text-2xl bg-cyan-600 border-2 p-5 rounded-2xl hover:bg-red-600 text-white font-extrabold"
          onClick={handleRgbColorGenerator}
        >
          Generate RGB Color
        </button>
      </div>
    </div>
  );
}

export default App;
