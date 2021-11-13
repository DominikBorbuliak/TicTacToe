import React, { Fragment } from 'react'
import '../assets/css/game.css'
import X from '../assets/icons/X.png'
import O from '../assets/icons/O.png'
import { FieldType } from '../store/types'

interface Props {
    index: number
    fieldType: FieldType
    onFieldClick: (index: number) => void
}

const Square = (props: Props) => {
    const {index, fieldType, onFieldClick} = props

    return (
        <Fragment>
            <a className="square" onClick={() => onFieldClick(index)}>
                {fieldType === FieldType.X && <img src={X}/>}
                {fieldType === FieldType.O && <img src={O}/>}
            </a>
        </Fragment>
    )
}

export default Square