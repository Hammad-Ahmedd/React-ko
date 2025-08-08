import React, { useContext } from 'react'
import Usercontext from '../UseContext/Usercontext'

function Footer() {
    const { data } = useContext(Usercontext)

    if (!data) {
        return (
            <p>Please Login</p>
        )
    }
    if (data) {
        return (
            <p> YOur Name {data}</p>
        )
    }
}

export default Footer
