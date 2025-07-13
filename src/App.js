// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudyLogsPage from "./components/StudyLogsPage";
import PreparationPlanPage from "./components/PreparationPage"; // ✅ Correct import
import Portfolio from "./components/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <header className="navbar">
        <nav className="nav-links">
          <Link to="/" className="nav-link">Study Logs</Link>
          <Link to="/plan" className="nav-link">Preparation Plan & PDF</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<StudyLogsPage />} />
          <Route path="/plan" element={<PreparationPlanPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
