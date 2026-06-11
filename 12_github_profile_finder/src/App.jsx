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
      <div className="wrapper h-screen w-full flex flex-col gap- 5 items-center justify-center">
        <div className="container text-center h-9/12 rounded-lg flex flex-col items-center">
          <div className="username-input">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              autoComplete="true"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button onClick={() => handleLoginValue()}>Search</button>

            {data?.id && (
              <div className="user-data">
                <div className="user-image">
                  <img src={data?.avatar_url} />
                </div>
                <div className="user-name">Name: {data?.name}</div>
                <div className="user-repos">
                  Public Repos: {data?.public_repos}
                </div>
                <div className="user-followers">
                  Followers: {data?.followers}
                </div>
                <div className="user-following ">
                  Following: {data?.following}
                </div>
                <div className="user-joined">{data?.created_at}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
