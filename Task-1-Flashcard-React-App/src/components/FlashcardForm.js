import React, { useState } from 'react';

const FlashcardForm = ({ addCard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard({ question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Question" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Answer" 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
        required 
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default FlashcardForm;
