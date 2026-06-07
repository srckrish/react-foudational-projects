import React, { useState } from "react";

function TabItem({ tabData, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleCurrentIndex(getCurrentIndex) {
    setCurrentIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper max-w-2xl mx-auto mt-10">
      {tabData && tabData.length > 0 ? (
        <div className="container flex flex-col justify-center items-center gap-8">
          <div className="label-container flex gap-3 justify-center items-center">
            {tabData.map((tabDataItem, index) => {
              return (
                <div
                  key={tabDataItem.id}
                  className="label cursor-pointer bg-cyan-600 text-white rounded-lg px-3 py-2 font-semibold hover:bg-green-600  "
                  onClick={() => handleCurrentIndex(index)}
                >
                  <h2>{tabDataItem.label} </h2>
                </div>
              );
            })}
          </div>
          <div className="content font-semibold text-blue-800 text-2xl bg-gray-300 rounded-lg px-3 py-2">
            {tabData[currentIndex] && tabData[currentIndex].content}
          </div>
        </div>
      ) : (
        "No data found"
      )}
    </div>
  );
}

export default TabItem;
