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
      const response = await fetch(
        `${getUrl}?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchProducts(url);
  }, [url, count]);

  console.log(products);

  useEffect(() => {
    if (products && products.length === 100) setIsButtonDisabled(true);
  }, [products]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (errorMessage !== null) {
    return <div>Error Occured! {errorMessage} </div>;
  }

  return (
    <div className="wrapper mx-auto max-w-7xl mt-10">
      <div className="container grid grid-cols-5">
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
      <div>
        <button disabled={isButtonDisabled} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {isButtonDisabled ? (
          <span> You've reached to 100 products </span>
        ) : null}
      </div>
    </div>
  );
}

export default App;
