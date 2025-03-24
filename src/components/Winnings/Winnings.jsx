import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";

const teams = [
  "Mumbai Indians",
  "Chennai Super Kings",
  "Royal Challengers Bangalore",
  "Kolkata Knight Riders",
  "Delhi Capitals",
  "Punjab Kings",
  "Rajasthan Royals",
  "Sunrisers Hyderabad",
  "Gujarat Titans",
  "Lucknow Super Giants"
];

const Winnings = () => {

    <Navbar />
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [prediction, setPrediction] = useState("");

  const handlePredict = () => {
    if (team1 === team2) {
      alert("Select two different teams!");
      return;
    }
    setPrediction(`Predicted Winner: ${team1} or ${team2}`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Predict IPL Match Winner</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Select Team 1: </label>
        <select value={team1} onChange={(e) => setTeam1(e.target.value)}>
          <option value="">-- Select Team --</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Select Team 2: </label>
        <select value={team2} onChange={(e) => setTeam2(e.target.value)}>
          <option value="">-- Select Team --</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select>
      </div>

      <button onClick={handlePredict}>Predict</button>

      {prediction && (
        <div style={{ marginTop: "20px" }}>
          <h3>Prediction Result:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default Prediction;
