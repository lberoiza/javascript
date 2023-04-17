import { useState, useEffect } from "react";

export type FetchResponse<T> = {
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
  const [abortController, setAbortController] = useState<AbortController | null>(null);


  const handleCancelRequest = () => {
    if (abortController) {
      abortController.abort();
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    setAbortController(controller);

    fetch(url, { signal: controller.signal })
      .then(response => response.json())
      .then(jsonResponse => {
        setData(jsonResponse as FetchResponse<T>);
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