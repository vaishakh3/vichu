import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./quiz.css";

function Quiz() {
  const [questions, setQuestions] = useState([
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0,
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: 0,
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes = 900 seconds
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(questions);
  }, [location]);

  useEffect(() => {
    if (timeLeft === 0) {
      alert("Time is up!");
      navigate("/");
    }
  }, [timeLeft, navigate]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [timeLeft]);

  function handleOptionSelect(option) {
    setSelectedOption(option);
  }

  function handleNextClick() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      alert("You have completed the quiz!");
      navigate("/");
    }
  }

  return (
    <div className="quiz-container">
      <div className="centered-container">
        <h2>
          Time left: {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </h2>
        <h3>Question {currentQuestion + 1}/{questions.length}</h3>
      </div>
      <p className="question">{questions[currentQuestion].question}</p>
      <div className="options-container centered-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === index ? "selected" : ""}}
            }`}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="centered-container">
        <br></br><br></br><br></br><br></br><br></br>
        <button className="next-button" onClick={handleNextClick}>
          <a>Next</a>
          <i className="fa fa-arrow-down"></i>
        </button>
      </div>
    </div>
  );
}

export default Quiz;
