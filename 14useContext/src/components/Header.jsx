import React, { use, useContext, useState } from 'react'
import Usercontext from '../UseContext/Usercontext'

function Header() {
    const { setdata } = useContext(Usercontext)
    const [name, setname] = useState("")
    function getname(e) {
        e.preventDefault()
        setdata(name)
    }
    return (
        <>
            <input type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter Your Name"
            />
            <button onClick={getname} >DO IT JUST DO IT</button>
        </>
    )
}

export default Header
