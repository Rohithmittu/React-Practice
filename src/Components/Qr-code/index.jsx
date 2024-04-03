import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qRCode, setQRCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQRCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR-code</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter Your Value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qRCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
