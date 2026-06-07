import React, { useState } from "react";

function TabItem({ tabData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleCurrentIndex(getCurrentIndex) {
    setCurrentIndex(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      {tabData && tabData.length > 0 ? (
        <div className="container">
          {tabData.map((tabDataItem, index) => {
            return (
              <div
                key={tabDataItem.id}
                className="label"
                onClick={() => handleCurrentIndex(index)}
              >
                {tabDataItem.label}
              </div>
            );
          })}

          <div className="content">
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
