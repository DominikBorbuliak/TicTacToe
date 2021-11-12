import React, { Fragment, useState } from 'react'
import '../assets/css/game.css'
import X from '../assets/icons/X.png'
import O from '../assets/icons/O.png'

interface Props {
    isXsTurn: boolean
    onSquareClick: () => void
}

const Square = (props: Props) => {
    const {isXsTurn, onSquareClick} = props

    const [xField, setXField] = useState<boolean>(false);
    const [oField, setOField] = useState<boolean>(false);

    const onSquareClickExtend = () => {
        if (xField || oField) return

        if (isXsTurn)
            setXField(true)
        else
            setOField(true)

        onSquareClick()
    }

    return (
        <Fragment>
            <a className="square" onClick={onSquareClickExtend}>
                {xField && <img src={X}/>}
                {oField && <img src={O}/>}
            </a>
        </Fragment>
    )
}

export default Square