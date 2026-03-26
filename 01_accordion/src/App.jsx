import React, { useState } from "react";
import data from "./data";
function App() {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (getCurrentItemId) => {
    setSelected(getCurrentItemId === selected ? null : getCurrentItemId);
  };

  return (
    <>
      {data && data.length > 0 ? (
        <div className="wrapper mx-auto max-w-2xl mt-10">
          <div className="container shadow-cyan-200 shadow-xl rounded-2xl border border-gray-400">
            {data.map((dataItem) => {
              return (
                <div className="itemList px-5">
                  <div className="border-b border-gray-300">
                  <div className="item py-5 flex justify-between items-center" onClick={()=> handleSingleSelection(dataItem.id)}>
                    <h2 className="title text-lg font-medium text-gray-800">{dataItem.question}</h2>
                    <span className= {`icon text-2xl ${selected === dataItem.id ? `rotate-45`:`rotate-0`}`}>+</span>
                  </div>
                  {(selected === dataItem.id) &&(
                  <h3 className="content pb-5 text-gray-600">
                    {dataItem.answer}
                  </h3>
                  )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        "No data found"
      )}
    </>
  );
}

export default App;
