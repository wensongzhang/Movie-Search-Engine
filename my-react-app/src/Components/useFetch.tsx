// Create a custom hook to fetch data from an API
import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        };
        fetchData();
    }, [url]);
    
    return { data, loading };
};
