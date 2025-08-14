import React from 'react'
import { Usetic } from '../Usecontext/Usecontexttic'
import { use } from 'react'
import { useState } from 'react'

function Boxs({ box }) {
    const { ClickBox } = Usetic()
    const [value, setvalue] = useState(box.boxText)
    const clickbox = (() => {
        ClickBox({ ...box })
        if (box.checkbox) {
            setvalue("X")
        } else {
            setvalue("O")
        }
    })

    return (
        <button
            className='btn'
            onClick={clickbox}
        >{value}</button>
    )
}

export default Boxs
