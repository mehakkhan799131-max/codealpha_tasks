import React, { useState } from "react";

function FitnessForm({ records, setRecords }) {
  const [steps, setSteps] = useState("");
  const [workout, setWorkout] = useState("");
  const [calories, setCalories] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = {
      date: new Date().toLocaleDateString(),
      steps,
      workout,
      calories,
      duration: 0,
    };
    setRecords([...records, newData]);
    setSteps("");
    setWorkout("");
    setCalories("");
  };

  return (
    <form
      className="card"
      onSubmit={submitHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",   // inputs & button centered
        textAlign: "center",
      }}
    >
      <h2>Add Fitness Activity 🏋️‍♀️</h2>

      <input
        type="number"
        placeholder="Steps 🚶‍♂️"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Workout Type 🏋️"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Calories 🔥"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />

      <button type="submit">Add Record ➕</button>
    </form>
  );
}

export default FitnessForm;
