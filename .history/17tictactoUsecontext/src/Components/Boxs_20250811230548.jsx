import React from 'react'
import { Usetic } from '../Usecontext/Usecontexttic'
import { use } from 'react'
import { useState } from 'react'

function Boxs({ box }) {
    const { ClickBox } = Usetic()


    return (
        <button
            className='btn'
            onClick={clickbox}
        >{value}</button>
    )
}

export default Boxs
