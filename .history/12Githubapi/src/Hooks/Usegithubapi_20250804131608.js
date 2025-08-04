import React, { useEffect, useState } from 'react'

function Usegithubapi(call) {
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)
    useEffect(() => {
        if (!call) return;
        const fetchnew = async () => {
            seterror(null)
            try {
                
                const promise = await fetch(api)
                if (!promise.ok) {
                    throw new Error("User Not found")
                }
                const jsn = await promise.json()
                setdata(jsn)
            } catch (err) {
                seterror(err.message)
                setdata(null)
            }
        }
        fetchnew()
    }, [call])
    return { data, error }
}

export default Usegithubapi
