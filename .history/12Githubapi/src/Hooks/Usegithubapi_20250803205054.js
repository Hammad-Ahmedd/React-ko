import React, { useEffect, useState } from 'react'

function Usegithubapi(call) {
    const [data, setdata] = useState([])
    const [error, seterror] = useState(null)
    useEffect(() => {
        const fetchnew = async () => {
            try {
                const api = `https://api.github.com/users/${call}`
                const promise = await fetch(api)
                const jsn = await promise.json()
                setdata(jsn)
            } catch (err) {
                seterror("User not found")
                setdata(null)
            }
        }
        fetchnew()
    }, [data])
    return {data,error}
}

export default Usegithubapi
