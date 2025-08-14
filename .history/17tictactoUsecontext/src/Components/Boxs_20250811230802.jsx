import React from 'react'
import { Usetic } from '../Usecontext/Usecontexttic'
import { use } from 'react'
import { useState } from 'react'

function Boxs({ box }) {
    const { ClickBox } = Usetic()


    return (
        <button
            className='btn'
            onClick={ClickBox}
        >{box.boxText}</button>
    )
}

export default Boxs
