import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { FieldType, GameStatus } from '../store/types'
import Board from './Board'
import { store } from 'react-notifications-component';

const Game = () => {
    const [isXTurn, setIsXTurn] = useState<boolean>(true);
    const [squares, setSquares] = useState<FieldType[]>(Array(9).fill(FieldType.Empty))
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Play);

    const winningPositions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    const onFieldClick = (index: number) => {
        if (gameStatus !== GameStatus.Play) return
        if (squares[index] != FieldType.Empty) {
            store.addNotification({
                message: "Click on empty field!",
                type: "info",
                container: "top-right",
                dismiss: {
                    duration: 500
                  }
              });
            return
        }

        let tempArray = squares
        tempArray[index] = isXTurn ? FieldType.X : FieldType.O
        setSquares(tempArray)
        setIsXTurn(!isXTurn)
    }

    useEffect(() => {
        if (gameStatus !== GameStatus.Play) return
        let result = FieldType.Empty
        winningPositions.forEach((positions) => {
            if (squares[positions[0]] === squares[positions[1]] &&
                squares[positions[1]] === squares[positions[2]] &&
                squares[positions[2]] === squares[positions[0]] &&
                squares[positions[0]] !== FieldType.Empty) {
                    result = squares[positions[0]]
                } 
        })

        if (result === FieldType.Empty)
            return

        store.addNotification({
            message: "Congratulations player " + result + " won!",
            type: "success",
            container: "top-right",
            dismiss: {
                duration: 2000
                }
            });
        setGameStatus(GameStatus.Win)
    })

    useEffect(() => {
        if (gameStatus !== GameStatus.Play) return
        let hasSpace = false
        squares.forEach((fieldType) => {
            if (fieldType === FieldType.Empty)
                hasSpace = true
        })

        if (!hasSpace) {
            store.addNotification({
                message: "The game ended with draw",
                type: "info",
                container: "top-right",
                dismiss: {
                    duration: 2000
                    }
            });
            setGameStatus(GameStatus.Draw)
        }
    })

    return (
        <Fragment>
            <Board squares={squares} onFieldClick={onFieldClick}/>
        </Fragment>
    )
}

export default Game