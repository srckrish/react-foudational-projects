import React, { useEffect } from "react";
import { useState } from "react";

function App({ url }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);

      const data = await response.json();

      if (data.products && data.products.length > 0) {
        // console.log(data.products);
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

  function handleScrollProgress() {
    // console.log(
    //   document.body.scrollTop,
    //   document.body.scrollHeight,
    //   document.body.clientHeight,
    // );
    // console.log(
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight,
    // );

    const scrollOnPage =
      document.body.ScrollTop || document.documentElement.scrollTop;

    const pageHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollProgress(Math.ceil((scrollOnPage / pageHeight) * 100));
    // console.log((scrollOnPage / pageHeight) * 100);
  }

  useEffect(() => {
    function handleScroll() {
      handleScrollProgress();
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <div>Loading data....</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="wrapper">
      <div className={`progress-bar sticky top-0 bg-gray-300 w-full h-6`}>
        <div
          className={`current-progress bg-green-600 h-6 flex items-center justify-end text-white text-xs rounded-r-lg ${scrollProgress === 0 ? "" : "pr-2"}`}
          style={{ width: `${scrollProgress}%` }}
        >
          {Math.ceil(scrollProgress)}%
        </div>
      </div>

      {products && products.length > 0
        ? products.map((productItem) => (
            <h3 key={productItem.id}> {productItem.title} </h3>
          ))
        : "No data found"}
    </div>
  );
}

export default App;
