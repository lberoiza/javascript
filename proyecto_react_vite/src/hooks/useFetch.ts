import UseFetchData, { IUseFetchData } from "@/classes/UseFetchData";
import { useState, useEffect } from "react";

export type UseFetchReturn<T> = {
  data: UseFetchData<T>;
  loading: boolean;
  error: Error | null;
  handleCancelRequest: () => void;
}

const useFetch = <T>(url: string): UseFetchReturn<T> => {
  const fetchData = new UseFetchData<T>();

  const [data, setData] = useState<UseFetchData<T>>(fetchData);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [abortController, setAbortController] = useState<AbortController | null>(null);


  const handleCancelRequest = () => {
    if (abortController) {
      abortController.abort();
    }
  };

  useEffect(() => {
    setData(new UseFetchData<T>())
    const controller = new AbortController();
    setAbortController(controller);

    fetch(url, { signal: controller.signal })
      .then(response => response.json())
      .then(jsonResponse => {
        data.setFetchData(jsonResponse as IUseFetchData<T>)
        setData(data);
      })
      .catch(error => {
        if (error.name !== "AbortError") {
          setError(error as Error);
        }
      })
      .finally(() => setLoading(false))

    return () => handleCancelRequest();
  }, [url]);


  return { data, loading, error, handleCancelRequest };
};

export default useFetch;