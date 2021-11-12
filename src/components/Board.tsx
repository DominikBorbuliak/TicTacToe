import React, { Fragment, useState } from 'react'
import Square from './Square'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/game.css'

interface Props {
}

const Board = () => {
    const [isXsTurn, setIsXsTurn] = useState<boolean>(true)

    const onSquareClick = () => {
        setIsXsTurn(!isXsTurn);
    }

    const board = [...Array(9)].map(() =>
        <div className="grid-item">
            <Square isXsTurn={isXsTurn} onSquareClick={onSquareClick}/>
        </div>
    )

    return (
        <Fragment>
            <div className="grid-container">
                {board}
            </div>
        </Fragment>
    )
}

export default Board