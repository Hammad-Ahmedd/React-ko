import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useWeather(){
    const [data,setdata]=useState({});
    const apiUrl=`https://api.weatherapi.com/v1/current.json?key=96ebc5174f734afaa26113341251207&q=${data}`
    const fetxhapi=useEffect( async()=>{
        const promise=await fetch(apiUrl);
        const returnPromise=await promise.json()
        setdata()
    },[data])

}