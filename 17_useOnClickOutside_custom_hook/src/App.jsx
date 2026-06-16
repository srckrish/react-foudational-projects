import React, { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";

function App() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowContent(false));
  return (
    <div className="wrapper max-w-2xl mx-auto mt-10 text-center ">
      {showContent ? (
        <h2 ref={ref} className="text-center border-3 rounded-lg text-lg font-semibold bg-blue-500 text-white p-2 hover:bg-blue-600 transition-colors">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam
          quia asperiores facere dolores molestias quo tempore porro dolorem in
          aliquam blanditiis praesentium earum voluptas, neque reiciendis
          voluptate voluptatem officiis.
        </h2>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer text-lg font-semibold"
        >
          Show Content
        </button>
      )}
    </div>
  );
}

export default App;
