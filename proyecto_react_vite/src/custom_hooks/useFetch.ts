import { useState, useEffect } from "react";


type FetchResponse<T> = {
  isSuccessful: boolean,
  successMessages: string[],
  warningMessages: string[],
  errorMessages: string[],
  response: T | null,
};


export type UseFetchReturn<T> = {
  data: FetchResponse<T>;
  loading: boolean;
  error: Error | null;
  handleCancelRequest: () => void;
}


const useFetch = <T>(url: string): UseFetchReturn<T> => {
  const fetchResponse = <FetchResponse<T>>({
    isSuccessful: true,
    successMessages: [],
    warningMessages: [],
    errorMessages: [],
    response: null,
  });

  const [data, setData] = useState<FetchResponse<T>>(fetchResponse);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  const abortController = new AbortController();

  useEffect(() => {

    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((json) => {
        data.response = json as T;
        console.log({data});
        setData(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Cancelled request");
        } else {
          setError(error as Error);
        }
      })
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, [url]);


  const handleCancelRequest = () => {
    if (abortController) {
      abortController.abort();
    }
  };

  return { data, loading, error, handleCancelRequest };
};

export default useFetch;