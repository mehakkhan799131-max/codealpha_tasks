import React, { useState } from "react";

function AddFlashcard({ flashcards, setFlashcards }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAdd = () => {
    if (question && answer) {
      const newCard = {
        id: Date.now(),
        question,
        answer
      };
      setFlashcards([...flashcards, newCard]);
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        style={{ padding: "8px", width: "200px", marginRight: "10px", borderRadius: "5px" }}
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        style={{ padding: "8px", width: "200px", marginRight: "10px", borderRadius: "5px" }}
      />
      <button
        onClick={handleAdd}
        style={{ padding: "8px 15px", borderRadius: "5px", background: "#4cafef", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Add Card
      </button>
    </div>
  );
}

export default AddFlashcard;
