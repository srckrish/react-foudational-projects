import React from "react";
import TabItem from "./TabItem";

function RandomData() {
  return "Hi, this is Random Data from Random function in test 4";
}

function TabData() {
  const TabList = [
    {
      id: "1",
      label: "Tab 1",
      content: "Hi, this is Tab 1",
    },
    {
      id: "2",
      label: "Tab 2",
      content: "Hi, this is Tab 2",
    },
    {
      id: "3",
      label: "Tab 3",
      content: "Hi, this is Tab 3",
    },
    {
      id: "4",
      label: "Tab 4",
      content: <RandomData />,
    },
  ];

  return <TabItem tabData={TabList} />;
}

export default TabData;
