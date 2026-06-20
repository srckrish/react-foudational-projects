import React from "react";
import { useRef } from "react";
function App() {
  const data = [
    {
      id: 1,
      label: "First Section",
      text: "This is the first section",
      style: {
        backgroundColor: "red",
        color: "white",
        width: "100%",
        height: "600px",
      },
    },
    {
      id: 2,
      label: "Second Section",
      text: "This is the second section",
      style: {
        backgroundColor: "blue",
        color: "white",
        width: "100%",
        height: "600px",
      },
    },
    {
      id: 3,
      label: "Third Section",
      text: "This is the third section",
      style: {
        backgroundColor: "green",
        color: "white",
        width: "100%",
        height: "600px",
      },
    },
    {
      id: 4,
      label: "Fourth Section",
      text: "This is the fourth section",
      style: {
        backgroundColor: "purple",
        color: "white",
        width: "100%",
        height: "600px",
      },
    },
  ];

  const ref = useRef(null);

  function handleScrollToSection() {
    let position = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  return (
    <div className="wrapper text-center mt-10">
      <button
        onClick={handleScrollToSection}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer text-lg font-semibold"
      >
        Scroll to Second Section
      </button>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="section text-center mt-10 rounded-lg p-2"
          style={item.style}
          ref={index === 1 ? ref : null}
        >
          <h2 className="text-2xl font-semibold">{item.label}</h2>
          <p className="text-lg">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
