import React, { useContext, useState } from 'react'
import { Usecontexttic } from '../Usecontext/Usecontexttic'

function Boxs() {
    const {val}=useContext(Usecontexttic)
    const [txt,settxt]=useState("")
    return (
        <>
        <h1>Child Value is {val}</h1>
        </>
    )
}

export default Boxs
