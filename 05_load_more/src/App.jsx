import React, { useEffect, useState } from "react";

function App({ url, limit, skip }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [count, setCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  async function fetchProducts(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(
        `${getUrl}?limit=${limit}&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data = await response.json();

      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchProducts(url);
  }, [url]);

  console.log(products);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (errorMessage !== null) {
    return <div>Error Occured! {errorMessage} </div>;
  }

  return (
    <div className="wrapper">
      {products && products.length
        ? products.map((productItem) => {
            //
          })
        : null}
      <div className="container"></div>
    </div>
  );
}

export default App;
