import React from "react";

function Suggestions({ data, click }) {
  return (
    <>
      {data && data.length > 0
        ? data.map((dataItem, index) => (
            <li key={index} onClick={click} className="cursor-pointer hover:bg-gray-100 p-2 rounded-md m-2 border border-gray-300 shadow-md list-none">
              <span className="font-semibold text-lg text-blue-600 hover:text-blue-800 hover:underline hover:cursor-pointer hover:font-bold">{dataItem}</span>
            </li>
          ))
        : null}
    </>
  );
}

export default Suggestions;
