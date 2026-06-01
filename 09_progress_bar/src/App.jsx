import React, { useEffect } from "react";
import { useState } from "react";

function App({ url }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);

      const data = await response.json();

      if (data.products && data.products.length > 0) {
        console.log(data.products);
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
      console.log("Promise Fulfilled");
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return <div className="wrapper">App</div>;
}

export default App;
