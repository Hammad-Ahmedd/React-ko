import React, { useEffect, useState } from "react"
function useName(id) {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)
    const [data, setdata] = useState(null)

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            setloading(true)
            seterror(null);
            try {
                const apiurl = `https://jsonplaceholder.typicode.com/users/${id}`
                const promise = await fetch(apiurl)
                const json = await promise.json()
                if (json.error) throw new Error(json.error.message);
                setdata(json.name)
                console.log(json);

            } catch (err) {
                seterror("Fetch Failed")
                setdata(null)
            } finally {
                setloading(false)
                
            }
        };
        fetchData()
    }, [id])
    return { data, loading, error }
}

export default useName