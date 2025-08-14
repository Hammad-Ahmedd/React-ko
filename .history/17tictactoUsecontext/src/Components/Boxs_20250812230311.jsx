import React, { useContext } from 'react'
import { Usecontexttic } from '../Usecontext/Usecontexttic'

function Boxs() {
    const {val}=useContext(Usecontexttic)
    const [txt,settxt]
    return (
        <>
        <h1>Child Value is {val}</h1>
        </>
    )
}

export default Boxs
