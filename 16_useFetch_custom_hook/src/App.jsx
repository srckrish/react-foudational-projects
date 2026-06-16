import React from "react";
import useFetch from "./useFetch";

function App() {
  const { data, loading, errorMessage } = useFetch(
    "https://dummyjson.com/products",
    {},
  );

  if (loading) {
    return <div>Loading data.....</div>;
  }

  if (errorMessage) {
    <div> {errorMessage} </div>;
  }

  return (
    <div className="wrapper p-4">
      {data && data.products && data.products.length > 0
        ? data.products.map((dataItem) => (
            <h3 key={dataItem.id} className="text-lg font-mono">
              {dataItem.title}
            </h3>
          ))
        : "No data found"}
    </div>
  );
}

export default App;
