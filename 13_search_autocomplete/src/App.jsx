import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data.users.length > 0) {
        // console.log(data.users.map((dataItem) => dataItem.firstName));

        setUserData(data.users.map((dataItem) => dataItem.firstName));
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
    fetchData();
  }, []);

  if (loading) {
    return <div> Loading.... </div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  function handleInputChange(e) {
    const query = e.target.value;
    setInputValue(query);
    const cleanedQuery = query.toLowerCase();

    if (query.length > 0 && userData.length > 0) {
      const filteredData = userData.filter(
        (dataItem) => dataItem.toLowerCase().indexOf(cleanedQuery) !== -1,
      );
      setSuggestions(filteredData);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
    // console.log(suggestions);
  }

  function handleClick(event) {
    setInputValue(event.target.innerText);
    setShowSuggestions(false);
    setSuggestions([]);
  }

  return (
    <div className="wrapper border-2 border-gray-300 rounded-md p-4 max-w-2xl mx-auto mt-10">
      <div className="container text-center mb-4 shadow-md p-2 rounded-md border border-gray-300">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search UserName..."
          onChange={(e) => handleInputChange(e)}
          value={inputValue}
          name="username"
          autoComplete="off"
        />
      </div>
      {showSuggestions && (
        <Suggestions data={suggestions} click={handleClick} />
      )}
    </div>
  );
}
export default App;
