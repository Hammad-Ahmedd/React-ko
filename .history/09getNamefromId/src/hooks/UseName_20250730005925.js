import React, { use, useEffect, useState } from "react";

function UsefoundName(id) {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)
    const [data, setdata] = useState()

    useEffect(() => {
        const fetchData = (async () => {
            try {
                const apiurl = `https://jsonplaceholder.typicode.com/users/${id}`
                const promise = await fetch(apiurl)
                const json = await promise.jason()
                setdata(json.name)
            } catch (err) {
                seterror("Fetch Failed")

            } finally {
                setloading(false)
            }
        })
        fetchData()
    }, [id])
    return { data, loading, error }
}

export default use