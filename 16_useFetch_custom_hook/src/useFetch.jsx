import React, { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(url, { ...options });

      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();

      setData(data);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, errorMessage, loading };
}

export default useFetch;
