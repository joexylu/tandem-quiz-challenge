import React from 'react'

function GameOver({Score, total}) {
    return (
        <div className="gameover">
            You got {Score} / {total} correct!
        </div>
    )
}

export default GameOver
