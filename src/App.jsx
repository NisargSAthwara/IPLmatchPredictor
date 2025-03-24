// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";
import PointsTable from "./components/PointsTable/PointsTable.jsx";
import Categories from "./components/Categories/Categories.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Winnings from "./components/Winnings/Winnings.jsx";
import Scores from "./components/Scores/Scores.jsx";
import FantasyTeam from "./components/FantasyTeam/FantasyTeam.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Schedule />
                <PointsTable />
                <Categories />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route path="/winnings" element={<Winnings />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/fantasy-team" element={<FantasyTeam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
