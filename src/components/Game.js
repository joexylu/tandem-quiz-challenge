import React, {useState}from 'react'
import QuestionsAndAnswersArray from "../Apprentice_TandemFor400_Data.json"

import GameOver from './GameOver'

function Game() {

    const [progress, setProgress] = useState(0)
    const [Score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(QuestionsAndAnswersArray[progress].question)
    const [rightAns, setRightAns] = useState(QuestionsAndAnswersArray[progress].correct)
    const [wrongAns, setWrongAns] = useState(QuestionsAndAnswersArray[progress].incorrect)
    console.log(QuestionsAndAnswersArray)


    const renderGame = () => {
        if (progress<QuestionsAndAnswersArray.length){
            return(
                <div>

                </div>
            )
        }else{
            return(
                <GameOver Score={Score}/>
            )
        }
    }
    return (
        <div>
            {renderGame()}
            this is Game
        </div>
    )
}

export default Game
