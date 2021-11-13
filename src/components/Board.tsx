import React, { Fragment, useState } from 'react'
import Field from './Field'
import { FieldType } from '../store/types'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/game.css'

interface Props {
    squares: FieldType[]
    onFieldClick: (index: number) => void
}

const Board = (props: Props) => {
    const { squares, onFieldClick } = props

    return (
        <div className="board">
            <div className="grid-container">
                {squares.map((type, index) => 
                    <div className="grid-item">
                        <Field index={index} fieldType={type} onFieldClick={onFieldClick} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Board