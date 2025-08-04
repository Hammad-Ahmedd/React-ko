import React, { useEffect, useState } from 'react'

function Usegithubapi(call) {
    const [data, setdata] = useState([])
    const [error, seterror] = useState(null)
    useEffect(() => {
        if (!call) return;
        const fetchnew = async () => {
            seterror(null)
            try {
                const api = `https://api.github.com/users/${call}`
                if(!api.ok){
                    throw new Error("User Not found")
                }
                const promise = await fetch(api)
                const jsn = await promise.json()
                setdata(jsn)
            } catch (err) {
                seterror(err)
                setdata(null)
            }
        }
        fetchnew()
    }, [call])
    return { data, error }
}

export default Usegithubapi
