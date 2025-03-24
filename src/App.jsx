// src/App.js
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
import Fantasy from "./components/Fantasy/Fantasy.jsx";
import Score from "./components/Score/Score.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/winnings" element= {<Winnings />} />
        <Route path="/Fantasy" element= {<Fantasy />} />
        <Route path="/Score" element= {<Score />} />
      </Routes>
      <Hero />
      <Schedule />
      <PointsTable />
      <Categories />
      <ContactUs />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
