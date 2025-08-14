import React from 'react'
import { Usetic } from '../Usecontext/Usecontexttic'
import { use } from 'react'
import { useState } from 'react'

function Boxs({ box }) {
    const { ClickBox } = Usetic()
    const [value,setvalue]=useState(box.bo)
    const clickbox=(()=>{
        ClickBox({id:Date.now()})
    })

    return (
        <button
            className='btn'
            onClick={""}
        >{value}</button>
    )
}

export default Boxs
