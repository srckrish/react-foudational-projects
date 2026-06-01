import React from "react";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function changeTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  console.log(theme);

  return (
    <div
      className={`wrapper flex items-center min-h-screen ${theme === "dark" ? "bg-black text-white" : ""}`}
    >
      <div className="flex flex-col gap-10 items-start mx-10">
        <h2>Theme Mode: {theme} </h2>
        <button
          onClick={() => changeTheme()}
          className="border rounded-lg px-5 py-3 bg-cyan-700 text-white font-semibold cursor-pointer hover:bg-green-600"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default App;
