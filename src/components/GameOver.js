import React from 'react'

function GameOver({Score, total}) {
    return (
        <div>
            You got {Score} / {total} correct!
        </div>
    )
}

export default GameOver
