// src/App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";
import PointsTable from "./components/PointsTable/PointsTable.jsx";
import Categories from "./components/Categories/Categories.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Schedule />
      <PointsTable />
      <Categories />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
