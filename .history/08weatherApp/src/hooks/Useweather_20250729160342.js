import React from "react";

function useWeather(curr) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!curr) return;

        const fetchApi = async () => {
            setLoading(true);
            setError(null);
            try {
                const apiUrl = `https://api.weatherapi.com/v1/current.json?key=96ebc5174f734afaa26113341251207&q=${curr}`;
                const res = await fetch(apiUrl);
                const json = await res.json();
                setData(json.current.temp_c);
            } catch (err) {
                setError("Failed to fetch weather");
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, [curr]);

    return { data, loading, error };
}

export 
