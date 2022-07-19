import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Games from "./Components/Games/Games";

function App() {
  return (
    <div className="">
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Games />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
