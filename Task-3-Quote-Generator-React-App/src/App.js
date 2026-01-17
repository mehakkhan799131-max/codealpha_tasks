import React, { useState } from "react";
import "./App.css";
import quotes from "./quotes";

const colors = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #ff758c, #ff7eb3)",
  "linear-gradient(135deg, #43cea2, #185a9d)",
  "linear-gradient(135deg, #f7971e, #ffd200)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
];

function App() {
  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const [quote, setQuote] = useState(getRandomQuote());
  const [bg, setBg] = useState(getRandomColor());

  const newQuoteHandler = () => {
    setQuote(getRandomQuote());
    setBg(getRandomColor());
  };

  const copyQuote = () => {
    navigator.clipboard.writeText(
      `${quote.text} — ${quote.author}`
    );
    alert("Quote copied!");
  };

  return (
    <div className="app" style={{ background: bg }}>
      <div className="quote-box">
        <p className="quote-text">“{quote.text}”</p>
        <p className="quote-author">— {quote.author}</p>

        <div className="buttons">
          <button onClick={newQuoteHandler}>New Quote</button>
          <button className="copy" onClick={copyQuote}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
