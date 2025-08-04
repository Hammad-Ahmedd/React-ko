import React, { useEffect, useState } from 'react'

function Usegithubapi(call) {
    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchnew = async () => {
            const api = `https://api.github.com/users/${call}`
            const promise = await fetch(api)
            const jsn = await promise.json()
            setdata(jsn)
        }
        fetchnew()
    }, [data])
    return data
}

export default Usegithubapi
