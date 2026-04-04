import React, { useEffect, useState } from "react";

function App({ url }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [count, setCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  async function fetchProducts(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?limit=20&skip=${count * 20}`);
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  const handleLoadMore = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (url !== "") fetchProducts(url);
  }, [url, count]);

  useEffect(() => {
    if (products && products.length === 100) setIsButtonDisabled(true);
  }, [products]);

  if (errorMessage !== null) {
    return <div>Error Occured! {errorMessage} </div>;
  }

  console.log(count);

  return (
    <div className="wrapper mx-auto max-w-7xl mt-10 px-2">
      <div className="container grid grid-cols-2 md:grid-cols-5">
        {products && products.length
          ? products.map((productItem) => {
              return (
                <div
                  className="product border border-gray-400 flex items-center flex-col"
                  key={productItem.id}
                >
                  <img
                    src={productItem.thumbnail}
                    alt={productItem.title}
                    height={100}
                    width={100}
                  />
                  <span>{productItem.title}</span>
                </div>
              );
            })
          : null}
      </div>
      <div className="flex justify-center items-center flex-col gap-2 mt-10">
        {loading && <p>Loading more products...</p>}
        {!loading ? (
          <button
            className={`p-4 rounded-xl  font-bold ${isButtonDisabled ? "bg-gray-400 text-white cursor-not-allowed" : "bg-blue-400 text-white hover:bg-green-400"}`}
            disabled={isButtonDisabled}
            onClick={() => {
              handleLoadMore();
            }}
          >
            Load More Products
          </button>
        ) : null}
        {isButtonDisabled ? (
          <span className="text-gray-400 cursor-not-allowed font-bold p-3 rounded-xl">
            You've reached to 100 products{" "}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default App;
