import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";
function MenuItem({ item }) {
  // console.log(item);
  //   console.log(typeof item);
  //   console.log(item.length);
  //   console.log(item.children?.length);

  //    if (item.children) {
  //      console.log(item.children.length);
  //    }

  const [displayChild, setDisplayChild] = useState([]);

  const handleChildDisplay = function (getCurrentId) {
    setDisplayChild((prev) => {
      let cpy = [...prev];
      let index = cpy.indexOf(getCurrentId);
      if (index === -1) cpy.push(getCurrentId);
      else cpy.splice(index, 1);

      console.log(cpy);
      return cpy;
    });
  };

  return (
    <>
      <li onClick={() => handleChildDisplay(item.id)} className="px-3 py-5 flex gap-2 cursor-pointer">
        {item.label}
        {item.children?.length ? (
          displayChild.includes(item.id) ? (
            <FaMinus size={20} />
          ) : (
            <FaPlus size={20} />
          )
        ) : null}
      </li>
      {item.children?.length > 0 && displayChild.includes(item.id) && (
        <li>
          <MenuList list={item.children} />
        </li>
      )}
    </>
  );
}

export default MenuItem;
