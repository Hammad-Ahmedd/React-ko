import React, { useState } from 'react'
import Usercontext from './Usercontext'

function Usrcontextprovider({ children }) {
    const [data, setdata] = useState(null)

    return (
        <Usercontext.Provider value={{ data, setdata }}>
            {children}
        </Usercontext.Provider>
    )
}

export default Usrcontextprovider
