import React from 'react'
import { Usetic } from '../Usecontext/Usecontexttic'

function Box({ boxtake }) {
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

export default Box
