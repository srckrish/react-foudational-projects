import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function App({stars = 5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <>
      <div className="star-rating min-h-screen w-full flex">
        {[...Array(stars)].map((_, index) => {
          index += 1;
          console.log("index: ", index);
          console.log("hover: ", hover);
          console.log("rating: ", rating);
          
          return (
            <FaStar
              key={index}
              className={`${index <= (hover || rating) ? "text-[#898500]" : ""}`}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
