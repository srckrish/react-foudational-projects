import React, { useState } from "react";
import { QRCode } from "react-qr-code";
function App() {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleGenerateQRCode() {
    setQrCodeValue(inputValue);
    setInputValue("");
  }

  return (
    <div className="wrapper max-w-2xl mx-auto flex flex-col gap-10 justify-center items-center min-h-screen">
      <h3 className="text-2xl font-semibold text-[#D95D39]">
        Create a QR Code
      </h3>
      <div className="flex justify-center items-center gap-10">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          value={inputValue}
          placeholder="Enter Value"
          className="border rounded-lg p-2"
        />

        <button
          disabled={inputValue && inputValue.trim() !== "" ? false : true}
          onClick={() => handleGenerateQRCode()}
          className={`bg-cyan-500 text-white font-semibold p-2 rounded-lg cursor-pointer hover:bg-green-700 `}
        >
          Generate
        </button>
      </div>
      {qrCodeValue && qrCodeValue.trim() !== "" && (
        <QRCode id="qr-code" value={qrCodeValue} size={400} bgColor="#fff" />
      )}
      <h3 className="text-2xl font-semibold text-cyan-800">{qrCodeValue}</h3>
    </div>
  );
}

export default App;
