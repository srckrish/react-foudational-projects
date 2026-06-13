import React, { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [input, setInput] = useState("");
  const [loginValue, setLoginValue] = useState("");

  async function fetchData(getLoginValue) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${getLoginValue}`,
      );
      const data = await response.json();
      if (data) {
        setData(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      console.log("Promise Fulfilled");
      setLoading(false);
    }
  }

  function handleLoginValue() {
    setLoginValue(input);
    setInput("");
  }

  useEffect(() => {
    if (loginValue !== "") {
      fetchData(loginValue);
    }
  }, [loginValue]);

  if (errorMessage) {
    <div>{errorMessage}</div>;
  }

  return (
    <>
      <div className="wrapper h-screen w-full flex flex-col gap-5 items-center justify-center text-white bg-gray-900">
        <div className="container text-center h-9/12 rounded-lg flex flex-col items-center bg-gray-800">
          <div className="username-input text-2xl font-semibold flex gap-5 items-center justify-center mt-10 mb-10">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              autoComplete="true"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="text-white bg-gray-800 border border-gray-700 rounded-lg p-2 w-full ml-2 md:w-lg"
            />
            <button
              onClick={() => handleLoginValue()}
              className="text-white bg-gray-800 border border-gray-700 rounded-lg p-2 font-semibold w-24 mr-2"
            >
              Search
            </button>
          </div>
          {loading ? (
            <div> searching profile.... </div>
          ) : data?.status == 404 ? (
            "No user found"
          ) : data !== null ? (
            <User user={data} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
