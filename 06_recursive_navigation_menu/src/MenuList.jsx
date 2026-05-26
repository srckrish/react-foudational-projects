import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
//   console.log(list);
//   console.log(typeof list);
//   console.log(list.length);

  return (
    <ul className="pl-4">
      {list && list.length > 0
        ? list.map((listItem) => <MenuItem key={listItem.id} item={listItem} />)
        : "null"}
    </ul>
  );
}

export default MenuList;
