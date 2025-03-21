// src/components/Schedule/Schedule.jsx
import React from "react";
import "./Schedule.css"; // Import regular CSS

function Schedule() {
  const matches = [
    {
      team1: "Mumbai Indians",
      team2: "Chennai Super Kings",
      time: "7:30 PM",
      team1Logo: "MI.png",
      team2Logo: "CSK.png",
    },
    {
      team1: "Royal Challengers Bangalore",
      team2: "Kolkata Knight Riders",
      time: "3:30 PM",
      team1Logo: "RCB.png",
      team2Logo: "KKR.png",
    },
    {
      team1: "Delhi Capitals",
      team2: "Punjab Kings",
      time: "7:30 PM",
      team1Logo: "DC.png",
      team2Logo: "PBKS.png",
    },
  ];

  return (
    <div className="schedule">
      <h2>Match Schedule</h2>
      <div className="matchList">
        {matches.map((match, index) => (
          <div key={index} className="match">
            <div className="team">
              <img
                src={match.team1Logo}
                alt={match.team1}
                className="teamLogo"
              />
              <span>{match.team1}</span>
            </div>
            <span className="vs">vs</span>
            <div className="team">
              <img
                src={match.team2Logo}
                alt={match.team2}
                className="teamLogo"
              />
              <span>{match.team2}</span>
            </div>
            <span className="time">{match.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
