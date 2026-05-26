import React from "react";
import MenuList from "./MenuList";

function App({ menus = [] }) {
  return (
    <div className="wrapper bg-cyan-800 text-white max-w-2xs font-semibold min-h-screen">
      <MenuList list={menus} />
    </div>
  );
}

export default App;
