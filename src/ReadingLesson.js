import React, { useState } from "react";

const questions = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Golden_Retriever_Carlos_(10581910556).jpg",
    choices: ["cat", "ball", "dog"],
    answer: "dog"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    choices: ["apple", "grape", "car"],
    answer: "apple"
  }
];

export default function ReadingLesson() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const handleChoice = (choice) => {
    if (choice === question.answer) setScore(score + 1);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Reading Lesson</h2>
      {finished ? (
        <div>
          <h3>Lesson Complete!</h3>
          <p>Your score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div>
          <img src={question.image} alt="quiz" style={{ maxWidth: "300px" }} />
          <div style={{ marginTop: 20 }}>
            {question.choices.map((c, i) => (
              <button key={i} onClick={() => handleChoice(c)} style={{ margin: 10 }}>
                {c}
              </button>
            ))}
          </div>
          <p>Question {current + 1} of {questions.length}</p>
        </div>
      )}
    </div>
  );
}
