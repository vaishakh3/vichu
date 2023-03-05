import { useState } from "react";
import "./Home.css";

function Home() {
  const [questions, setQuestions] = useState([]);

  function addQuestion() {
    const newQuestion = {
      question: document.getElementById("question-input").value,
      options: [
        document.getElementById("option1-input").value,
        document.getElementById("option2-input").value,
        document.getElementById("option3-input").value,
        document.getElementById("option4-input").value,
      ],
      answer: parseInt(document.getElementById("answer-input").value),
    };

    setQuestions([...questions, newQuestion]);

    document.getElementById("question-input").value = "";
    document.getElementById("option1-input").value = "";
    document.getElementById("option2-input").value = "";
    document.getElementById("option3-input").value = "";
    document.getElementById("option4-input").value = "";
    document.getElementById("answer-input").value = "";
  }

  return (
    <div>
      <h1>
        <p>Questions,</p>
      </h1>
      {questions.map((q, index) => (
        <div key={index}>
          <h2>Question {index + 1}: {q.question}</h2>
          <ul>
            {q.options.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
          <p>Correct answer: {q.options[q.answer]}</p>
        </div>
      ))}
      <h2>Add Question</h2>
      <label htmlFor="question-input">
        Question:
      </label>
      <input type="text" id="question-input" />
      <br /><br />
      <label htmlFor="option1-input">Option 1:</label>
      <input type="text" id="option1-input" />
      <label htmlFor="option2-input">Option 2:</label>
      <input type="text" id="option2-input" />
      <label htmlFor="option3-input">Option 3:</label>
      <input type="text" id="option3-input" />
      <label htmlFor="option4-input">Option 4:</label>
      <input type="text" id="option4-input" />
      <br /><br />
      <label htmlFor="answer-input">
        Correct answer (enter option number):
      </label>
      <input type="number" id="answer-input" />
      <button onClick={addQuestion}>Add</button>
    </div>
  );
}

export default Home;
