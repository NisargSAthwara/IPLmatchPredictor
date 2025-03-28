// src/components/PointsTable/PointsTable.jsx
import React from "react";
import "./PointsTable.css"; // Import regular CSS

function PointsTable() {
  const teams = [
    { name: "Mumbai Indians", points: 18, logo: "/MI.svg" },
    { name: "Chennai Super Kings", points: 16, logo: "/CSK.svg" },
    { name: "Royal Challengers Bangalore", points: 14, logo: "/RCB.svg" },
    { name: "Kolkata Knight Riders", points: 12, logo: "/KKR.svg" },
    { name: "Delhi Capitals", points: 10, logo: "/DC.svg" },
    { name: "Punjab Kings", points: 8, logo: "/PBKS.svg" },
    { name: "Rajasthan Royals", points: 6, logo: "/RR.svg" },
    { name: "Sunrisers Hyderabad", points: 4, logo: "/SRH.svg" },
  ];

  return (
    <div className="pointsTable">
      <h2>IPL 2025 Points Table</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>
                <img src={team.logo} alt={team.name} className="teamLogo" />
                {team.name}
              </td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PointsTable;
