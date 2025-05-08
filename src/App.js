import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ReadingLesson from "./ReadingLesson";
import ReadingSentenceMatch from "./ReadingSentenceMatch"; // 🔹 new import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<ReadingLesson />} />
        <Route path="/reading2" element={<ReadingSentenceMatch />} /> {/* 🔹 new route */}
      </Routes>
    </Router>
  );
}

export default App;

