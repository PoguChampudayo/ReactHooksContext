import { useEffect, useState } from "react"


export const useJsonFetch = (url, opts) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
    
          try {
            const response = await fetch(url, opts);
    
            if (!response.ok) {
                setError(response.status)
            }
    
            const incomingData = await response.json();
    
            setData(incomingData);
          } 
          finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
  return [data, loading, error]
}
