import React from "react";
import Flashcard from "./Flashcard";

function FlashcardList({ flashcards, setFlashcards }) {
  const handleDelete = (id) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
  };

  const handleEdit = (id, newQuestion, newAnswer) => {
    const updatedCards = flashcards.map((card) =>
      card.id === id ? { ...card, question: newQuestion, answer: newAnswer } : card
    );
    setFlashcards(updatedCards);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {flashcards.map((card) => (
        <Flashcard
          key={card.id}
          flashcard={card}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default FlashcardList;
