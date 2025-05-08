import React, { useState, useEffect } from "react";

const questions = [
  {
    sentence: "I see a 🐱 under the ___",
    choices: ["tree", "sun", "hat"],
    answer: "tree"
  },
  {
    sentence: "She ran to the ___ with her dog.",
    choices: ["store", "moon", "cloud"],
    answer: "store"
  }
];

export default function ReadingSentenceMatch() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = questions[current];

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  useEffect(() => {
    speak(question.sentence.replace("___", "blank"));
  }, [current]);

  const handleChoice = (choice) => {
    if (choice === question.answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Reading Sentence Match</h2>
      {finished ? (
        <div>
          <h3>Lesson Complete!</h3>
          <p>Your score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: 24 }}>{question.sentence.replace("___", "____")}</p>
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
