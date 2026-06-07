import React from "react";
import TabItem from "./TabItem";

function RandomData() {
  return "I am Mr. Random from Random function";
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
      content: "You are now tab 2 now :)",
    },
    {
      id: "3",
      label: "Tab 3",
      content: "Hey, you clicked me! I am Tab 3",
    },
    {
      id: "4",
      label: "Tab 4",
      content: <RandomData />,
    },
  ];

  function handleChange(currentIndex) {
    console.log(currentIndex);
  }

  return <TabItem tabData={TabList} onChange={(index) => handleChange(index)} />;
}

export default TabData;
