import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ReadingLesson from "./ReadingLesson";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<ReadingLesson />} />
      </Routes>
    </Router>
  );
}

export default App;
