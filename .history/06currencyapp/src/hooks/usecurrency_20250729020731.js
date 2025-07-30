import { useState, useEffect } from "react";

function useCurrency(curr) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`;
            const response = await fetch(url);
            const result = await response.json();
            setData(result[curr]);
        };
        fetchData();
    }, [curr]);

    return data;
}

export default useCurrency;
