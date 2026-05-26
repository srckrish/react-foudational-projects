import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MenuData from "./MenuData.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
  <App menus={MenuData} />,
  // </StrictMode>,
);
