import { useEffect, useRef, useState } from "react"

export const useFetch = (url, timeWait = 1000) => {
    const [state, setstate] = useState({data: null, loading: true, error: null});

    const isMouted = useRef(true);

    useEffect(() => {
        return () => {
            isMouted.current = false;
        };
    }, []);
    
    useEffect(() => {
        setstate({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then((resp) => resp.json())
            .then(data => {
                setTimeout(() => {
                    if (isMouted.current) {
                        setstate({
                            loading: false,
                            error: null,
                            data,
                        });
                    } else {
                        console.log('se cerró');
                    }
                },timeWait);
            });
    }, [url,timeWait]);

    return state;
}