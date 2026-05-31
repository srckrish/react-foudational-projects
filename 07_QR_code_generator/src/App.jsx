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
    <div className="wrapper">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
        placeholder="Enter Value"
      />

      <button onClick={() => handleGenerateQRCode()}>Generate</button>
      <QRCode id="qr-code" value={qrCodeValue} size={400} bgColor="#fff" />
    </div>
  );
}

export default App;
