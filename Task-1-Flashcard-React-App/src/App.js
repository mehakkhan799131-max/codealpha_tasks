import React, { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import AddFlashcard from "./components/AddFlashcard";
import flashcardData from "./data/flashcards";
import "./App.css";

function App() {
  const [flashcards, setFlashcards] = useState(flashcardData);

  const handleShuffle = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
  };

  return (
    <div className="App">
      <h1>Modern Flashcard App </h1>
      <AddFlashcard flashcards={flashcards} setFlashcards={setFlashcards} />
      <button
        onClick={handleShuffle}
        style={{ padding: "10px 20px", borderRadius: "10px", marginBottom: "20px", background: "#ff6f61", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Shuffle Cards 🔀
      </button>
      <FlashcardList flashcards={flashcards} setFlashcards={setFlashcards} />
    </div>
  );
}

export default App;
