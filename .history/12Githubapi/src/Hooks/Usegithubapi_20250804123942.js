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
                    
                }
                const promise = await fetch(api)
                const jsn = await promise.json()
                setdata(jsn)
            } catch (err) {
                seterror("User not found")
                setdata(null)
            }
        }
        fetchnew()
    }, [call])
    return { data, error }
}

export default Usegithubapi
