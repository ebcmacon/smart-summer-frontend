import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Smart Summer!</h1>

      <div style={{ marginTop: 20 }}>
        <Link to="/reading">
          <button style={{ marginRight: 10 }}>📖 Reading Lesson 1</button>
        </Link>

        <Link to="/reading2">
          <button>🧠 Reading Lesson 2</button>
        </Link>
      </div>
    </div>
  );
}

