import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './container.css';

function Initial() {
  const navigateTo = useNavigate();

  function handleQuizMasterClick() {
    navigateTo('/Home');
  }

  function handleQuizzeeClick() {
    navigateTo('/Quiz');
  }

  return (
    <div className="container">
      <h1>Choose your role:</h1>
      <div className="buttons">
        <button className="quiz-master" onClick={handleQuizMasterClick}>
          I'm a Quiz Master
        </button>
        <button className="quizzee" onClick={handleQuizzeeClick}>
          I'm a Quizzee
        </button>
      </div><br></br>
      <button onClick={() => navigateTo(-1)}>go back</button>
    </div>
  );
}

export default Initial;