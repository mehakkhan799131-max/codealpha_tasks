import React, { useState, useEffect } from "react";
import FitnessForm from "./components/FitnessForm";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem("fitnessData");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("fitnessData", JSON.stringify(records));
  }, [records]);

  return (
    <div className="container">
      <h1>Fitness Tracker 💪</h1>

      {/* ROW LAYOUT */}
      <div className="app-row">
        <FitnessForm records={records} setRecords={setRecords} />
        <Dashboard records={records} setRecords={setRecords} />
      </div>
    </div>
  );
}

export default App;
