import React from "react";
import { useState } from "react";

function useWeather(){
    const [data,setdata]=useState({});
    const apiUrl=`https://api.weatherapi.com/v1/current.json?key=96ebc5174f734afaa26113341251207&q=${data}`

}