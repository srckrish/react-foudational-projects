import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchProducts(getUrl) {
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data.products && data.products.length > 0) {
        setProducts(data.products);
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts("https://dummyjson.com/products?limit=150");
  }, []);

  // function handleScrollToBottom() {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // }
  const bottomRef = useRef(null);

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="wrapper mx-auto text-center mt-10 px-2">
      <div className="items-container">
        <button
          onClick={handleScrollToBottom}
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer text-lg font-semibold mb-4"
        >
          Scroll to Bottom
        </button>
        {products && products.length > 0
          ? products.map((product) => (
              <div key={product.id} className="item">
                <h2>{product.title}</h2>
              </div>
            ))
          : "No products found"}
      </div>
      <button
        onClick={() => handleScrollToTop()}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer text-lg font-semibold my-4"
      >
        Scroll to Top
      </button>
      <div ref={bottomRef} />
    </div>
  );
}

export default App;
