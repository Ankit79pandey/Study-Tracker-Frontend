// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudyLogsPage from "./components/StudyLogsPage";
import PreparationPlanPage from "./components/StudyLogsPage";
import Portfolio from "./components/Portfolio";
import './App.css'
function App() {
  return (
    <Router>
      <nav style={{ margin: 20 }}>
        <Link to="/" style={{ marginRight: 20 }}>
          Study Logs
        </Link>
        <Link to="/plan">Preparation Plan & PDF</Link>
      </nav>

      <Routes>
        <Route path="/" element={<StudyLogsPage />} />
        <Route path="/plan" element={<PreparationPlanPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
