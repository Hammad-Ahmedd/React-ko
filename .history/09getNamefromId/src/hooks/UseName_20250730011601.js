import React from "react"
function usefoundName(id) {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)
    const [data, setdata] = useState()

    useEffect(() => {
        const fetchData = (async () => {
            setloading(true)
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

export default usefoundName