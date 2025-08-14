import React from 'react'
import { Usetic } from '../Usecontext/Usecontexttic'
import { use } from 'react'
import { useState } from 'react'

function Boxs({ box }) {
    const { ClickBox } = Usetic()
    const [value, setvalue] = useState(box.boxText)
    const clickbox = (() => {
        ClickBox({ })
    })

    return (
        <button
            className='btn'
            onClick={ClickBox}
        >{if(box)}</button>
    )
}

export default Boxs
