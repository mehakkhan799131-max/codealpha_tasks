import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard({ flashcard, onDelete, onEdit }) {
  const [flipped, setFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editQuestion, setEditQuestion] = useState(flashcard.question);
  const [editAnswer, setEditAnswer] = useState(flashcard.answer);

  const handleSave = (e) => {
    e.stopPropagation();
    if(editQuestion.trim() && editAnswer.trim()){
      onEdit(flashcard.id, editQuestion, editAnswer);
      setIsEditing(false);
    }
  };

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${flipped ? "flipped" : ""}`}>

        {/* FRONT SIDE */}
        <div
          className="front"
          onClick={() => !isEditing && setFlipped(true)}
        >
          {isEditing ? (
            <input
              type="text"
              value={editQuestion}
              onChange={(e) => setEditQuestion(e.target.value)}
              style={{ width: "90%" }}
            />
          ) : (
            <p>{flashcard.question}</p>
          )}
        </div>

        {/* BACK SIDE */}
        <div
          className="back"
          onClick={() => !isEditing && setFlipped(false)}
        >
          {isEditing ? (
            <>
              <input
                type="text"
                value={editAnswer}
                onChange={(e) => setEditAnswer(e.target.value)}
                style={{ width: "90%", marginBottom: "10px" }}
              />
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <p>{flashcard.answer}</p>
              <div style={{ marginTop: "10px" }}>
                <button
                  className="edit-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditing(true);
                    setFlipped(true); // flip automatically while editing
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(flashcard.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
