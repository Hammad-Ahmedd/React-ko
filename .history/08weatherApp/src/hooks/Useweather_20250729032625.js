import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useWeather(curr) {
    const [data, setdata] = useState(null);
    useEffect(() => {
        const fetxhapi = async () => {
            
            const promise = await fetch(apiUrl);
            const returnPromise = await promise.json()
            setdata(returnPromise.current.temp_c)
        };
        fetxhapi()
    }, [curr])
    return data
}
export default useWeather