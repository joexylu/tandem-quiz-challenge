import React, {useState}from 'react'
import QuestionsAndAnswersArray from "../Apprentice_TandemFor400_Data.json"
import shuffleArrayHelper from '../shuffleArrayHelper'

import Questions from './Questions'
import Answers from './Answers'
import GameOver from './GameOver'

function Game() {
    let tandemQuestions = QuestionsAndAnswersArray
    const [progress, setProgress] = useState(0)
    const [Score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(tandemQuestions[progress].question)
    const [rightAns, setRightAns] = useState(tandemQuestions[progress].correct)
    const [wrongAns, setWrongAns] = useState(tandemQuestions[progress].incorrect)
    console.log(tandemQuestions)

    const renderGame = () => {
        if (progress<tandemQuestions.length){
            return(
                <div>
                    <Questions currentQuestion={currentQuestion}/>
                    <Answers/>
                </div>
            )
        }else{
            return(
                <GameOver Score={Score} total={tandemQuestions.length}/>
            )
        }
    }

    const handleRestart =(e) =>{
        setProgress(0)
        setScore(0)
        tandemQuestions = shuffleArrayHelper(tandemQuestions)
        setCurrentQuestion(tandemQuestions[progress].question)
        setRightAns(tandemQuestions[progress].correct)
        setWrongAns(tandemQuestions[progress].incorrect)
    }
    return (
        <div>
            <div>
                Question {progress+1} of {tandemQuestions.length}
            </div>
            {renderGame()}
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}

export default Game
