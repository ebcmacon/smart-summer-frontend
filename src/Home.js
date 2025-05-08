import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Smart Summer!</h1>
      <Link to="/reading">
        <button>Start Reading Lesson</button>
      </Link>
    </div>
  );
}
