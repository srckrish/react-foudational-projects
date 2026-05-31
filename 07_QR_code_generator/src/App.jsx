import React, { useState } from "react";
import { QRCode } from "react-qr-code";
function App() {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleGenerateQRCode() {
    setQrCodeValue(inputValue);
    setInputValue("");
  }
  console.log(inputValue);

  return (
    <div className="wrapper max-w-2xl mx-auto flex flex-col gap-10 justify-center items-center min-h-screen">
      <h3 className="text-2xl font-semibold text-[#D95D39]">
        Create a QR Code
      </h3>
      <div className="flex justify-center items-center gap-10">
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
            setQrCodeValue("");
          }}
          type="text"
          value={inputValue}
          placeholder="Enter Value"
          className="border rounded-lg p-2"
        />

        <button
          disabled={inputValue.trim() !== "" ? false : true}
          onClick={() => handleGenerateQRCode()}
          className={`bg-cyan-500 text-white font-semibold p-2 rounded-lg cursor-pointer hover:bg-green-700 ${inputValue.trim() === "" ? "bg-gray-400 pointer-events-none" : ""} `}
        >
          Generate
        </button>
      </div>
      {qrCodeValue.trim() !== "" && (
        <>
          <QRCode id="qr-code" value={qrCodeValue} size={400} bgColor="#fff" />
          <h3 className="text-2xl font-semibold text-cyan-800">
            Your QR Code Is Ready!
          </h3>
        </>
      )}

      {inputValue.trim() === "" && qrCodeValue === "" ? (
        <h3 className="text-2xl font-semibold text-red-800">
          Enter a value to generate a QR code.
        </h3>
      ) : null}
    </div>
  );
}

export default App;
