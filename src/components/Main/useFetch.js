import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      console.log('entro al usefect de fetch')
      const fetchData = async () => {
          try {
              const resp = await fetch(url);
              const data = await resp.json();
              
              setApiData(data);
              setIsLoading(false);
              console.log('entro al try de fetch')
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };
        
        fetchData();
        console.log('terminoel fetch')
    }, [url]);
  
    return { isLoading, apiData, serverError };
  };

  export default useFetch;