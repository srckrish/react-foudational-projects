import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
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

  if (loading) {
    // return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      <div className="wrapper h-screen w-full flex flex-col gap- 5 items-center justify-center text-white bg-gray-900">
        <div className="container text-center h-9/12 rounded-lg flex flex-col items-center bg-gray-800">
          <div className="username-input text-2xl font-semibold flex gap-5 items-center justify-center mt-10 mb-10">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              autoComplete="true"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="text-white bg-gray-800 border border-gray-700 rounded-lg p-2"
            />
            <button
              onClick={() => handleLoginValue()}
              className="text-white bg-gray-800 border border-gray-700 rounded-lg p-2 font-semibold"
            >
              Search
            </button>
          </div>
          {data?.id && (
            <div className="user-data text-white flex flex-col gap-5 items-center mt-10">
              <div className="user-image text-white w-24 h-24 rounded-full">
                <img src={data?.avatar_url} />
              </div>
              <div className="user-name text-2xl font-semibold">
                Name: {data?.name}
              </div>
              <div className="user-repos text-white text-xl font-semibold text-left">
                Public Repos: {data?.public_repos}
              </div>
              <div className="user-followers text-white text-xl font-semibold text-left">
                Followers: {data?.followers}
              </div>
              <div className="user-following text-white text-xl font-semibold">
                Following: {data?.following}
              </div>
              <div className="user-joined text-white text-xl font-semibold">
                {data?.created_at}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
