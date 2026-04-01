import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App url={"https://picsum.photos/v2/list"} page={3} limit={10} />
  </StrictMode>
);
