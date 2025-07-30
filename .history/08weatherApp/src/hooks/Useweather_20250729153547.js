import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useWeather(curr) {
    const [data, setdata] = useState(null);
    useEffect(() => {
        const fetxhapi = async () => {
            try{

            }
           
        };
        fetxhapi()
    }, [curr])
    return data
}
export default useWeather