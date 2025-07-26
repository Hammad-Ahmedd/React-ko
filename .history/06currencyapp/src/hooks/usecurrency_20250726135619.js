import { useState, useEffect } from "react";

function usecurrency(curr) {
    useEffect(() => {
        const [curr, setcurr] = useState();
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
            (async function (params) {
            const =await fetch(url)
            const converttojason=await Promise.json()
            }())

    }, [curr])

}