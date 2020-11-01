import React from "react";
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
  setGameOver,
}) {
  const answerArr = shuffleArrayHelper(wrongAns.concat(rightAns));

  const handleClick = e => {
    e.preventDefault();
    if (e.target.innerHTML == rightAns) {
      setScore(Score + 1);
    }
    if (progress+1 < totalRound) {
      setProgress(progress + 1);
      setCurrentQuestion(tandemQuestions[progress].question);
      setRightAns(tandemQuestions[progress].correct);
      setWrongAns(tandemQuestions[progress].incorrect);
    }else{
        setGameOver(true)
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{answerArr[0]}</button>
      <button onClick={handleClick}>{answerArr[1]}</button>
      <button onClick={handleClick}>{answerArr[2]}</button>
      <button onClick={handleClick}>{answerArr[3]}</button>
    </div>
  );
}

export default Answers;
