import React, { useEffect, useState } from "react";
import data from "./data";
function App() {
  const [singleSelection, setSingleSelection] = useState(null);
  const handleSingleSelection = (getCurrentId) => {
    setSingleSelection((prev) => (prev !== getCurrentId ? getCurrentId : null));
  };

  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);
  const handleMultiSelection = (getCurrentId) => {
    setMultiSelection((prev) => {
      let cpy = [...prev];
      const index = cpy.indexOf(getCurrentId);
      if (index === -1) cpy.push(getCurrentId);
      else cpy.splice(index, 1);

      return cpy;
    });
  };
  return (
    <>
      {data && data.length > 0 ? (
        <div className="wrapper mx-auto max-w-2xl my-10 px-4">
          <div className="container shadow-cyan-200 shadow-xl rounded-2xl border border-gray-400 overflow-hidden">
            <div className="px-4 py-3 bg-[#fbfbfc] text-sm font-medium border-b border-gray-300 flex justify-between items-center">
              <p>{data.length} results </p>
              <button
                className="hover:text-blue-400 text-blue-700"
                onClick={() => {
                  setEnableMultiSelection((prev) => !prev);
                  setMultiSelection([]);
                  setSingleSelection(null);
                }}
              >
                {`${enableMultiSelection ? `Enable Single Selection` : `Enable Multi Selection`}`}
              </button>
            </div>
            <div className="itemList px-5">
              {data.map((dataItem) => {
                return (
                  <div
                    key={dataItem.id}
                    className="item border-b border-gray-300"
                  >
                    <button
                      className="item py-5 flex justify-between items-center w-full gap-1"
                      onClick={() =>
                        enableMultiSelection
                          ? handleMultiSelection(dataItem.id)
                          : handleSingleSelection(dataItem.id)
                      }
                    >
                      <span className="title md:text-lg text-md text-left font-medium text-gray-800">
                        {dataItem.question}
                      </span>
                      <span
                        className={`icon text-2xl transition-all duration-300 ${singleSelection === dataItem.id || multiSelection.includes(dataItem.id) ? `rotate-45` : `rotate-0`}`}
                      >
                        +
                      </span>
                    </button>
                    {singleSelection === dataItem.id ||
                    multiSelection.includes(dataItem.id) ? (
                      <p className="content pb-5 text-gray-600 transition-all duration-300 ease-in-out">
                        {dataItem.answer}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        "No data found"
      )}
    </>
  );
}

export default App;
