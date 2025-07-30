import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useWeather(curr) {
    const [data, setdata] = useState(null);
    useEffect(() => {
        const fetxhapi = async () => {
            try {
                const apiUrl = `https://api.weatherapi.com/v1/current.json?key=96ebc5174f734afaa26113341251207&q=${curr}`
                const promise = await fetch(apiUrl);
                const returnPromise = await promise.json()
                setdata(returnPromise.current.temp_c)
            },caches(err){

            }
           
        };
        fetxhapi()
    }, [curr])
    return data
}
export default useWeather