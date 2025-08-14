import React from 'react'
import { Usetic } from '../Usecontext/Usecontexttic'

function Boxs({ box }) {
    const { ClickBox } = Usetic()
    const clickbox=(()=>{
        ClickBox({})
    })

    return (
        <button
            className='btn'
            onClick={""}
        >{value}</button>
    )
}

export default Boxs
