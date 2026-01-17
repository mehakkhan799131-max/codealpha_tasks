import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function Dashboard({ records, setRecords }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editWorkout, setEditWorkout] = useState("");
  const [editSteps, setEditSteps] = useState("");
  const [editCalories, setEditCalories] = useState("");
  const [editDuration, setEditDuration] = useState("");

  const totalSteps = records.reduce((t, r) => t + Number(r.steps), 0);
  const totalCalories = records.reduce((t, r) => t + Number(r.calories), 0);

  const deleteRecord = (index) => {
    const updated = records.filter((_, i) => i !== index);
    setRecords(updated);
    localStorage.setItem("fitnessData", JSON.stringify(updated));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditWorkout(records[index].workout);
    setEditSteps(records[index].steps);
    setEditCalories(records[index].calories);
    setEditDuration(records[index].duration);
  };

  const saveEdit = (index) => {
    const updated = [...records];
    updated[index] = {
      ...updated[index],
      workout: editWorkout,
      steps: editSteps,
      calories: editCalories,
      duration: editDuration,
    };
    setRecords(updated);
    localStorage.setItem("fitnessData", JSON.stringify(updated));
    setEditIndex(null);
  };

  return (
    <div className="card">
      <h2>📊 Dashboard</h2>

      <p>🚶 Steps Goal (10,000)</p>
      <ProgressBar value={totalSteps} max={10000} />

      <p>🔥 Calories Goal (3,000)</p>
      <ProgressBar value={totalCalories} max={3000} />

      {records.length === 0 ? (
        <p>No activity added yet 💤</p>
      ) : (
        <ul>
          {records.map((r, i) => (
            <li key={i}>
              {editIndex === i ? (
                <div style={{ width: "100%" }}>
                  <input value={editWorkout} onChange={(e) => setEditWorkout(e.target.value)} />
                  <input value={editSteps} onChange={(e) => setEditSteps(e.target.value)} />
                  <input value={editCalories} onChange={(e) => setEditCalories(e.target.value)} />
                  <input value={editDuration} onChange={(e) => setEditDuration(e.target.value)} />
                  <button onClick={() => saveEdit(i)}>Save</button>
                </div>
              ) : (
                <>
                  <span>
                    {r.date} | {r.workout} | {r.steps} steps | {r.calories} cal | {r.duration} min
                  </span>
                  <div>
                    <button onClick={() => startEdit(i)} style={{ background: "#FFA500", marginRight: "6px" }}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => deleteRecord(i)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
