import React, { useState } from "react";
import shuffleArrayHelper from "../shuffleArrayHelper";

function Answers({
  totalRound,
  rightAns,
  wrongAns,
  progress,
  setProgress,
  Score,
  setScore,
  tandemQuestions,
  setCurrentQuestion,
  setRightAns,
  setWrongAns,
  setGameOver
}) {
  const answerArr = shuffleArrayHelper(wrongAns.concat(rightAns));
  const [correctness, setCorrectness] = useState(null);

  const handleClick = e => {
    e.preventDefault();
    if (e.target.innerHTML == rightAns) {
      setScore(Score + 1);
      setCorrectness("Correct!");
    } else {
      setCorrectness("Incorrect!");
    }

    setTimeout(() => {
      if (progress + 1 < totalRound) {
        setProgress(progress + 1);
        setCurrentQuestion(tandemQuestions[progress].question);
        setRightAns(tandemQuestions[progress].correct);
        setWrongAns(tandemQuestions[progress].incorrect);
      } else {
        setGameOver(true);
      }
      setCorrectness(null)
    }, 1000);
  };

  return (
    <div className="answers">
      <button className="answer-button" onClick={handleClick}>{answerArr[0]}</button>
      <button className="answer-button" onClick={handleClick}>{answerArr[1]}</button>
      <button className="answer-button" onClick={handleClick}>{answerArr[2]}</button>
      <button className="answer-button" onClick={handleClick}>{answerArr[3]}</button>
      <div className={`correctness`}>
          {correctness}
      </div>
    </div>
  );
}

export default Answers;
