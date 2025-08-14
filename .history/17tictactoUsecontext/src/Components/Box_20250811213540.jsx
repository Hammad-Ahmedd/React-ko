import React from 'react'
import { Usetic } from '../Usecontext/Usecontexttic'

function Box({ boxtake }) {
    const { ClickBox } = Usetic()

    return (
        <button
            className='btn'
            onClick={() => nowclick(index)}
        >{value}</button>
    )
}

export default Box
