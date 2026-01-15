import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export default function useFetch<T>(url: string): FetchState<T> {
    // defining states
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });
// use Effect to make fetch request
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setState({ data, loading: false, error: null }))
            .catch((error) => setState({ data: null, loading: false, error }));
    }, [url]);
    
    return state;
}