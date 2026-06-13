import React from "react";

function Suggestions({ data, click }) {
  return (
    <>
      {data && data.length > 0
        ? data.map((dataItem, index) => (
            <li key={index} onClick={click}>
              {dataItem}
            </li>
          ))
        : null}
    </>
  );
}

export default Suggestions;
