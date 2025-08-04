import React, { useEffect, useState } from 'react'

function usegithubapi(call) {
    const [data, setdata] = useState([])
    useEffect(() => {
        const fetch = (async () => {
            const api = `https://api.github.com/users/${call}`
            const promise = await fetch(api)
            const jsn = await promise.json()
            setdata(jsn)
        })
        fetch()
    }, [data])
    return data
}

export default Usegithubapi
