import { useEffect, useState } from "react";

function useWeather(curr) {
    const [tempC, setTempC] = useState(null); // Use a clear name for the returned data
    const [error, setError] = useState(null); // Optional: handle errors
    const [loading, setLoading] = useState(true); // Optional: handle loading state

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true);
                const apiUrl = `https://api.weatherapi.com/v1/current.json?key=96ebc5174f734afaa26113341251207&q=${curr}`;
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data && data.current && typeof data.current.temp_c === "number") {
                    setTempC(data.current.temp_c);
                } else {
                    setError("Weather data not available");
                }
            } catch (err) {
                setError("Failed to fetch weather data");
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, [curr]);

    return { tempC, loading, error };
}

export default useWeather;
